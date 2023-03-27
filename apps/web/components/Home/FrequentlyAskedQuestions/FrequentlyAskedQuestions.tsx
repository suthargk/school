// import { styled } from "@stitches/react";
// import React from "react";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import * as Accordion from "@radix-ui/react-accordion";

// const AccordionRoot = styled(Accordion.Root, {});

// const AccordionItem = styled(Accordion.Item, {});

// const Content = styled(Accordion.Content, {});

// const AccordionTrigger = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Header className="AccordionHeader">
//       <Accordion.Trigger
//         className={classNames("AccordionTrigger", className)}
//         {...props}
//         ref={forwardedRef}
//       >
//         {children}
//         <ChevronDownIcon className="AccordionChevron" aria-hidden />
//       </Accordion.Trigger>
//     </Accordion.Header>
//   )
// );

// const AccordionContent = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Content
//       className={classNames("AccordionContent", className)}
//       {...props}
//       ref={forwardedRef}
//     >
//       <div className="AccordionContentText">{children}</div>
//     </Content>
//   )
// );

// const FrequentlyAskedQuestions = () => {
//   return (
//     <AccordionRoot
//       className="AccordionRoot"
//       type="single"
//       defaultValue="item-1"
//       collapsible
//     >
//       <AccordionItem className="AccordionItem" value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>

//       <AccordionItem className="AccordionItem" value="item-2">
//         <AccordionTrigger>Is it unstyled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It's unstyled by default, giving you freedom over the look and
//           feel.
//         </AccordionContent>
//       </AccordionItem>

//       <AccordionItem className="AccordionItem" value="item-3">
//         <AccordionTrigger>Can it be animated?</AccordionTrigger>
//         <Content className="AccordionContent">
//           <div className="AccordionContentText">
//             Yes! You can animate the Accordion with CSS or JavaScript.
//           </div>
//         </Content>
//       </AccordionItem>
//     </AccordionRoot>
//   );
// };

// export default FrequentlyAskedQuestions;
