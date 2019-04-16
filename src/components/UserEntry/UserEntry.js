import React from "react";
import "./UserEntry.css";

const UserEntry = item => {
  const mainItem = item.item;
  const { document } = mainItem;
  const { subject } = document;
  const { primaryName, secondaryName } = subject;
  const { userEnvironment } = mainItem;
  const { client, version, ipAddress, platform } = userEnvironment;

  return (
    <div class="UserEntry">
      <p>Name: {primaryName}</p>
      <p>Surname: {secondaryName}</p>
      <div class="Environment">
        <p>-Environment-</p>
        <hr />
        <div class="data">
          <p>client: {client}</p>
          <p>version: {version}</p>
          <p>ipAdress: {ipAddress}</p>
          <p>platform: {platform.match("^.{1,15}")}...</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default UserEntry;
