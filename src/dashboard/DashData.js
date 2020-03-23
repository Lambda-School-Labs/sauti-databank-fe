// display user information for the admin and other basic info for quick access
import React from "react";
import { useHistory } from "react-router-dom";

import GraphContainer from "../GraphContainer";
import { getToken, decodeToken } from "./auth/Auth";

import { SignedInDiv, UserHeader } from "./styledComponents/Index";
import { FilterBoxOptions } from "../Components/FilterBoxOptions";
import { flavourOptions } from "../Components/docs/data";
import graphLabels from "../Components/graphLabels";

const filterTemplate = {
  0: {
    nameOfFilter: "Data Series",
    selectedCategory: "",
    selectableOptions: {},
    selectedTable: "",
    selectedTableColumnName: "",
    showOptions: false
  },

  1: {
    nameOfFilter: "Compare SubSamples",
    selectedCategory: "",
    selectableOptions: {},
    selectedTable: "",
    selectedTableColumnName: "",
    showOptions: false
  },
  2: {
    nameOfFilter: "Data Filter",
    selectedCategory: "",
    selectableOptions: {},
    selectedTable: "",
    selectedTableColumnName: "",
    showOptions: true
  }
};

function DashHome() {
  const signedIn = getToken();
  const token = getToken();
  let userEmail;
  if (token) {
    userEmail = decodeToken(token);
    userEmail = userEmail.email;
  }
  const history = useHistory();
  const isAValidSearchURL = url => {
    let searchString = history.location.search.slice(
      1,
      history.location.search.length
    );
    let split1 = searchString.split("&");
    // console.log(split1)
    let newFilterObject = {};

    for (var i in split1) {
      let split2 = split1[i].split("=");
      let split3 = split2[1].split("%2C");
      console.log(
        "filter name",
        split2[0],
        "search",
        "table name",
        split3[0],
        "option",
        split3[1]
      );
    }
    // if all these say undefined then we have a failed
  };
  const setupFilter = history => {
    // no media link
    console.log(history.location.search.length);
    if (history.location.search.length === 0) {
      console.log("got here");
      let defaultFilter = {};
      Object.keys(filterTemplate).forEach(filterId => {
        console.log(typeof filterId);
        // filterId is the same value in all location for this function
        defaultFilter = {
          ...defaultFilter,
          [filterId]: {
            ...filterTemplate[filterId],
            selectedCategory: filterId === "0" ? "Gender" : "",

            selectableOptions:
              filterId === "0" ? { Female: false, Male: false } : {},

            selectedTable: filterId === "0" || filterId === "1" ? "Users" : "",

            selectedTableColumnName: filterId === "0" ? "gender" : ""
          }
        };
        console.log("filter part", defaultFilter);
      });
      console.log("default filter");
      console.log(defaultFilter);

      // initial default
      return defaultFilter;
    } else {
      // if(history.location.search.length === 0) {
      //   console.log("wrong way")
      // }
      // user came to site from twitter, fb, or copy paste link
      // create url based object here
      let searchString = history.location.search.slice(
        1,
        history.location.search.length
      );
      // this one has issures
      // ?filter0=gender%2Cundefined&filter1=undefined%2Cundefined&filter2=age%2C10-20&filter3=crossing_freq%2CDaily&filter4=education%2CPrimary

      // "?filter0=gender%2CFemale&filter1=age%2Cundefined&filter2=crossing_freq%2CMonthly&filter3=education%2CSecondary"

      let split1 = searchString.split("&");
      // console.log(split1)
      let newFilterObject = {};

      for (var i in split1) {
        let split2 = split1[i].split("=");
        let split3 = split2[1].split("%2C");
        console.log(
          "filter name",
          split2[0],
          "search",
          "table name",
          split3[0],
          "option",
          split3[1]
        );
        if (split3[0] !== "undefined") {
          let optionFlags = {};
          // what happens when the tablename is not defined?
          // console.log("split3[0]", split3[0]);
          // get graphLabels[tableName].labels
          graphLabels[`${split3[0]}`].labels.forEach(option => {
            optionFlags = {
              ...optionFlags,
              [option]: false
            };
          });

          // the newFilterObject from the previous round is not
          // being used to make this one

          // wary of spreading using multiple sources inside the object
          newFilterObject = {
            ...newFilterObject,
            [i]: {
              // get rid of the "udefined" key
              // get already setup categories from the default
              // ...filters[i],
              // attributes that arent set from the url
              ...filterTemplate[i],
              selectedCategory:
                FilterBoxOptions.tableNamesToCategoryName[split3[0]],
              selectedTableColumnName: split3[0],
              selectableOptions:
                split3[1] === "undefined"
                  ? { ...optionFlags }
                  : { ...optionFlags, [split3[1]]: true },
              // selectedTable: //FilterBoxOptions.default[e.label{categoryName}].value.query
              // am I settng this right?
              showOptions: false
            }
            // maybe the original filter could be reconstructed using the url data(filter is read only)
            // Redux?
          };
        } else {
          newFilterObject = {
            ...newFilterObject,
            [i]: {
              ...filterTemplate[i],
              showOptions: false
            }
          };
        }
      }
      return newFilterObject;
    }
  };
  return (
    <>
      <SignedInDiv>
        <UserHeader></UserHeader>
      </SignedInDiv>
      <GraphContainer filters={setupFilter(history)} />
    </>
  );
}

export default DashHome;
