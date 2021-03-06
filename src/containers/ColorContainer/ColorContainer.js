import React from "react"
import { colorList, colorContainerData, defaultColor } from "../../portfolioData"
import ColorComponent from "../../components/ColorsComponent/ColorComponent"
// importing CSS
import "./ColorContainer.css"
import Settings from '@mui/icons-material/Settings'

export default function ColorContainer() {
  const colors = colorList.map((color) => {
    return <ColorComponent key={color.id} id={color.id} color={color.color} />
  })

  return (
    <section className="color-container" id="color-container">
      <span className="custom-span" id="color-toggler">
      <Settings style={{
            top: "50%",
            fontSize: "22px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}>
          className={colorContainerData.fontIcon}
      </Settings>
      </span>
      <p>{colorContainerData.paragraphOne}</p>
      <ul className="color-list-style" id="color-list">
        {colors}
      </ul>
      <hr />
      <p>{colorContainerData.paragraphTwo}</p>
      {/* default color container */}
      <ul className="color-list-style color-list-default">
        <li
          className="color-list-li"
          data-color={defaultColor.defaultColor}
        ></li>
      </ul>
    </section>
  )
}