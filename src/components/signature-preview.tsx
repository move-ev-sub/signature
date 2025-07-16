"use client";

import { BOARD_MEMBERS, EMAIL_DOMAIN } from "@/lib/consts";
import { Fragment } from "react";
import { useSignatureStore } from "./stores/signature-provider";

export function SignaturePreview() {
  const { name, position, username, phone } = useSignatureStore(
    (store) => store,
  );

  return (
    <>
      &nbsp;
      <br />
      <div
        style={{
          fontFamily: "Arial",
          fontSize: "8pt",
          lineHeight: "14pt",
          width: "350px",
          color: "#4a4a49",
        }}
      >
        <hr
          style={{
            textAlign: "left",
            backgroundColor: "#9d9d9d",
            height: "2px",
            border: "none",
            width: "265px",
          }}
        />
        <b>{name}</b>
        {position && (
          <Fragment>
            <br />
            {position}
          </Fragment>
        )}
        <br />
        <span style={{ fontSize: "11pt", color: "#265798" }}>
          {" "}
          <b>move </b>{" "}
        </span>
        &ndash; Studentische Unternehmensberatung e.&nbsp;V.
        <br />
        Universit&auml;tsstra&szlig;e 14&ndash;16
        <br />
        48143 M&uuml;nster
        <br />
        <hr
          style={{
            textAlign: "left",
            border: "none",
            height: "1px",
            backgroundColor: "#dadada",
            width: "265px",
          }}
        />
        <span style={{ display: "inline-block", width: "60px" }}>Telefon:</span>
        {phone}
        <br />
        <span style={{ display: "inline-block", width: "60px" }}>E-Mail:</span>
        <a
          style={{ color: "#4a4a49", textDecoration: "underline" }}
          href={`mailto:${username}@${EMAIL_DOMAIN}`}
        >
          {username}@{EMAIL_DOMAIN}
        </a>
        <br />
        <span style={{ display: "inline-block", width: "60px" }}>Web:</span>
        <a
          style={{ color: "#4a4a49", textDecoration: "underline" }}
          href="http://move-ev.de"
        >
          www.move-ev.de
        </a>
        <br />
        <hr
          style={{
            textAlign: "left",
            border: "none",
            height: "1px",
            backgroundColor: "#dadada",
            width: "265px",
          }}
        />
        Mitglied im Bundesverband Deutscher Studentischer
        <br />
        Unternehmensberatungen e.&nbsp;V. (
        <a
          style={{ color: "#4a4a49", textDecoration: "underline" }}
          href="http://www.bdsu.de"
        >
          www.bdsu.de
        </a>
        )
        <br />
        Mitglied im ConsultingNet NRW
        <br />
        <hr
          style={{
            textAlign: "left",
            border: "none",
            height: "1px",
            backgroundColor: "#dadada",
            width: "265px",
          }}
        />
        Vertretungsberechtigter Vorstand:{" "}
        {BOARD_MEMBERS.map((member, index) => (
          <Fragment key={member.email}>
            <a
              style={{ color: "#4a4a49", textDecoration: "underline" }}
              href={`mailto:${member.email}`}
            >
              {member.name},
            </a>{" "}
            {index === 0 && <br />}
          </Fragment>
        ))}
        <br />
        <span style={{ display: "inline-block", width: "120px" }}>
          Registergericht:
        </span>
        Amtsgericht M&uuml;nster
        <br />
        <span style={{ display: "inline-block", width: "120px" }}>
          Registernummer:
        </span>
        VR 3742
        <br />
        <hr
          style={{
            textAlign: "left",
            backgroundColor: "#9d9d9d",
            height: "2px",
            border: "none",
            width: "265px",
          }}
        />
      </div>
      <br />
      <div
        style={{
          fontFamily: "Arial",
          fontSize: "8pt",
          lineHeight: "14pt",
          color: "#4a4a49",
        }}
      >
        Unter Ber&uuml;cksichtigung der EU-DSGVO informieren wir Sie
        dar&uuml;ber, dass wir die von Ihnen angegebenen persönlichen Daten zum
        Zwecke der Bearbeitung und Beantwortung Ihrer Nachricht speichern.
        Detaillierte Informationen zu den Datenschutzhinweisen finden Sie auch
        direkt auf unserer Internetseite unter
        <a href="https://move-ev.de/datenschutz/">
          https://move-ev.de/datenschutz/
        </a>
        . Hinweis: Diese E-Mail enth&auml;lt vertrauliche und/oder rechtlich
        gesch&uuml;tzte Informationen. Wenn Sie nicht der/die richtige
        Adressat*in sind oder diese E-Mail irrt&uuml;mlich erhalten haben,
        informieren Sie bitte sofort den/die Absender*in und vernichten Sie
        diese E-Mail. Das unerlaubte Kopieren sowie die unbefugte Weitergabe
        dieser E-Mail sind nicht gestattet.
      </div>
    </>
  );
}
