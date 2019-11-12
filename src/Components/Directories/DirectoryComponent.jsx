import React from 'react'
import MenuItems from "../MenuItems/MenuItems.component"
import "./DirectoryStyle.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import {selectDirectorySection} from "../../Redux/Directory/DirectorySelectors"

const DirectoryComponent = ({sections}) => {
  return (
    <div className="directory-menu">
     {sections.map(({id, ...otherProps}) => (
       <MenuItems key={id} {...otherProps}/>))
     }
     </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(DirectoryComponent);