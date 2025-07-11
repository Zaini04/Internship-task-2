import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import { Email, Facebook, Home, Instagram, Phone, WhatsApp } from "@mui/icons-material";

export default function AccordionIndicator() {
  return (
    <AccordionGroup  className='space-y-8 '
      sx={{
        width:'100%',
        maxWidth: '100%',
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: "0.2s",
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
          transform: "rotate(45deg)",
        },
      }}
    >
      <Accordion >
        <AccordionSummary indicator={<AddIcon />}>
          Get In Touch
        </AccordionSummary>
        <AccordionDetails>
        <ul className="flex flex-col justify-center gap-y-2 items-start mt-3">

          <li className="flex gap-x-2 mb-1.5  justify-start   items-center">
            <Home className="text-blue-400" /> 
            62 Street, Wakra, Qatar
          </li>
          <li className="flex gap-x-2 mb-1.5    items-start">
            <Phone className="text-blue-400" />
            +974 33306077
          </li>
          <li className="flex gap-x-2  mb-1.5   items-center">
            <Email className="text-blue-400" />
            info@gareyqatar.com
          </li>
          <div className="flex mb-1.5 gap-x-6 ">
            <Facebook className="text-blue-600 "/>
            <Instagram className="text-[#A74E9B]"/>
            <WhatsApp className="text-green-600"/>
          </div>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}>
          Categories
        </AccordionSummary>
        <AccordionDetails>
          <ul className="flex flex-col mt-3 gap-y-2">
            <li>Apple</li>
            <li>Computer</li>
            <li>Watch</li>
            <li>Kitchen Gadgets</li>

            
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary indicator={<AddIcon />}>
          Information
        </AccordionSummary>
        <AccordionDetails>
          <ul className="flex flex-col mt-3 gap-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>RefundPolicy</li>
            
          </ul>
        </AccordionDetails>
      </Accordion>
           <Accordion>
        <AccordionSummary indicator={<AddIcon />}>
          Useful Links
        </AccordionSummary>
        <AccordionDetails>
          <ul className="flex flex-col mt-3 gap-y-2">
            <li>My Orders</li>
            <li>Sitemap</li>
            <li>FAQs</li>          
          </ul>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
