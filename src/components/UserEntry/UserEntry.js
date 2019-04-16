import React from "react";
import "./UserEntry.css";

const UserEntry = item => {
  const mainItem = item.item;
  const { class: _class } = item;
  const { document } = mainItem;
  const { subject } = document;
  const { primaryName, secondaryName } = subject;
  const { userEnvironment } = mainItem;
  const { client, version, ipAddress, platform } = userEnvironment;

  return (
    <ul class={"UserEntry " + (_class ? _class : "")}>
      <p>Name: {primaryName}</p>
      <p>Surname: {secondaryName}</p>
      <li class="Environment">
        <p>-Environment-</p>
        <hr />
        <ul class="data">
          <li>client: {client}</li>
          <li>version: {version}</li>
          <li>ipAdress: {ipAddress}</li>
          <li>platform: {platform.match("^.{1,15}")}...</li>
        </ul>
        <hr />
      </li>
    </ul>
  );
};

export default UserEntry;
