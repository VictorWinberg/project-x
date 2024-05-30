import{l as n,q as a}from"./index-B_sJm1-I.js";const c=async()=>await a(`
    SELECT
      assignments.*,
      (rp.first_name || ' ' || rp.last_name) AS responsible_person_name,
      rp.email AS responsible_person_email,
      rc.company_name AS responsible_company_name,
      (ecp.first_name || ' ' || ecp.last_name) AS external_contact_person_name,
      ecp.email AS external_contact_person_email,
      ec.company_name AS external_company_name
    FROM assignments
    LEFT JOIN contacts rp ON responsible_person_id = rp.contact_id
    LEFT JOIN contacts ecp ON external_contact_person_id = ecp.contact_id
    LEFT JOIN companies rc ON rp.company_id = rc.company_id
    LEFT JOIN companies ec ON ecp.company_id = ec.company_id
  `),t=async e=>{await n("assignments",e)};export{t as c,c as f};
