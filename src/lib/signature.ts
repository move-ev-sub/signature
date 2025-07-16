import { BOARD_MEMBERS, EMAIL_DOMAIN } from "./consts";
import type { SignatureProps } from "./types";

export function createSignature({
  name,
  username,
  phone,
  position,
}: SignatureProps) {
  const email = `${username}@${EMAIL_DOMAIN}`;

  let boardMembers: string = "";

  BOARD_MEMBERS.forEach((member, index) => {
    let item = `<a
        style="color: #4a4a49; text-decoration: underline"
        href="mailto:${member.email}"
      >${member.name}</a
      >`;

    if (index !== BOARD_MEMBERS.length - 1) {
      item += ", ";
    }

    if (index === 0) {
      item += "<br />";
    }

    boardMembers += item;
  });

  return `&nbsp;
<br />
<div
  style="
    font-family: Arial;
    font-size: 8pt;
    line-height: 14pt;
    width: 350px;
    color: #4a4a49;
  "
>
  <hr
    align="left"
    width="265"
    color="#808080"
    height="2"
    style="
      text-align: left;
      background-color: #9d9d9d;
      height: 2px;
      border: none;
      width: 265px;
    "
    align="left"
  />
  <b>${name}</b>
${
  position &&
  `<br />
${position}`
}
  <br />
  <span style="font-size: 11pt; color: #265798"> <b>move </b> </span>&ndash;
  Studentische Unternehmensberatung e.&nbsp;V.<br />Universit&auml;tsstra&szlig;e
  14&ndash;16<br />48143 M&uuml;nster<br />
  <hr
    align="left"
    width="265"
    color="#808080"
    height="1"
    style="
      text-align: left;
      border: none;
      height: 1px;
      background-color: #dadada;
      width: 265px;
    "
    align="left"
  />
  <span style="display: inline-block; width: 60px">Telefon:</span>
  ${phone}
  <br />
  <span style="display: inline-block; width: 60px">E-Mail:</span>
  <a
    style="color: #4a4a49; text-decoration: underline"
    href="mailto:${email}"
    >${email}</a
  >
  <br />
  <span style="display: inline-block; width: 60px">Web:</span>
  <a style="color: #4a4a49; text-decoration: underline" href="http://move-ev.de"
    >www.move-ev.de</a
  >
  <br />
  <hr
    align="left"
    width="265"
    color="#808080"
    height="1"
    style="
      text-align: left;
      border: none;
      height: 1px;
      background-color: #dadada;
      width: 265px;
    "
    align="left"
  />
  Mitglied im Bundesverband Deutscher Studentischer
  <br />
  Unternehmensberatungen e.&nbsp;V. (<a
    style="color: #4a4a49; text-decoration: underline"
    href="http://www.bdsu.de"
    >www.bdsu.de</a
  >)
  <br />
  Mitglied im ConsultingNet NRW
  <br />
  <hr
    align="left"
    width="265"
    color="#808080"
    height="1"
    style="
      text-align: left;
      border: none;
      height: 1px;
      background-color: #dadada;
      width: 265px;
    "
    align="left"
  />
  Vertretungsberechtigter Vorstand: ${boardMembers}
  <br />
  <span style="display: inline-block; width: 120px">Registergericht:</span>
  Amtsgericht M&uuml;nster
  <br />
  <span style="display: inline-block; width: 120px">Registernummer:</span>
  VR 3742<br />
  <hr
    align="left"
    width="265"
    color="#808080"
    height="2"
    style="
      text-align: left;
      background-color: #9d9d9d;
      height: 2px;
      border: none;
      width: 265px;
    "
    align="left"
  />
</div>
<br />
<div
  style="font-family: Arial; font-size: 8pt; line-height: 14pt; color: #4a4a49"
>
  Unter Ber&uuml;cksichtigung der EU-DSGVO informieren wir Sie dar&uuml;ber,
  dass wir die von Ihnen angegebenen persönlichen Daten zum Zwecke der
  Bearbeitung und Beantwortung Ihrer Nachricht speichern. Detaillierte
  Informationen zu den Datenschutzhinweisen finden Sie auch direkt auf unserer
  Internetseite unter
  <a href="https://move-ev.de/datenschutz/">https://move-ev.de/datenschutz/</a>.
  Hinweis: Diese E-Mail enth&auml;lt vertrauliche und/oder rechtlich
  gesch&uuml;tzte Informationen. Wenn Sie nicht der/die richtige Adressat*in
  sind oder diese E-Mail irrt&uuml;mlich erhalten haben, informieren Sie bitte
  sofort den/die Absender*in und vernichten Sie diese E-Mail. Das unerlaubte
  Kopieren sowie die unbefugte Weitergabe dieser E-Mail sind nicht gestattet.
</div>
`;
}
