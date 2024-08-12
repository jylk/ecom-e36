import React from 'react'
import { Accordion } from 'react-bootstrap'

function Services() {
  return (
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>MacBook Pro</b></Accordion.Header>
        <Accordion.Body>
          Behold an entirely new class of GPU architecture. And the biggest breakthrough in graphics yet for Apple silicon. Dynamic Caching optimises fast on-chip memory to dramatically increase average GPU utilisation — driving a huge performance boost for the most demanding pro apps and games.
          Games will look more detailed than ever thanks to hardware-accelerated mesh shading. This brings greater capability and efficiency to geometry processing, enabling games to render more visually complex scenes.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>iPhone 13</b></Accordion.Header>
        <Accordion.Body>
          The iPhone 13 and iPhone 13 Mini (stylized as iPhone 13 mini) are smartphones designed, developed, marketed, and sold by Apple Inc. They are the fifteenth generation of iPhones (succeeding the iPhone 12 and iPhone 12 Mini respectively). They were unveiled at an Apple Event in Apple Park in Cupertino, California, on September 14, 2021, alongside the higher-priced iPhone 13 Pro and iPhone 13 Pro Max flagships. Pre-orders for the iPhone 13 and iPhone 13 Mini began on September 17, 2021. They were officially released on September 24, 2021. As of June 2024, the iPhone 13 is the oldest iPhone model still officially sold by, and fully supported by Apple (the iPhone 13 Mini was discontinued on September 12, 2023).[13]
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Galaxy S21</b></Accordion.Header>
        <Accordion.Body>
          The Samsung Galaxy S21 is a series of high-end Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series. The first three smartphones were unveiled at Samsung's Galaxy Unpacked event on 14 January 2021, while the Fan Edition model was unveiled at Samsung's CES on 3 January 2022.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>ThinkPad X1 Carbon</b></Accordion.Header>
        <Accordion.Body>
          The first laptop with X1 branding was the ThinkPad X1 – the 13-inch sub-compact model, the thinnest and fastest charging business laptop at the time.[citation needed] In contrast with previous 13-inch X series model (X301), it has only one RAM slot and only one storage slot.In early August 2012, Lenovo released the ThinkPad X1 Carbon as the 14-inch successor to the original ThinkPad X1.[1] The X1 Carbon was first released in China due to the popularity of ThinkPads in that market.[2] In November 2012, Lenovo announced a touch-screen variant called the ThinkPad X1 Carbon Touch designed for use with Windows 8. Its display makes use of multi-touch technology that can detect simultaneous inputs from up to ten fingers.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Services