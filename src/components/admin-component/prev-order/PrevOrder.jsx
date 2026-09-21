import React from 'react'
import style from "./PrevOrder.module.css"
import PrevRecordComponent from '../../prev-records/PrevRecordComponent'

const PrevOrder = () => {
  return (
    <div className={style.mainContainer}>
      <PrevRecordComponent/>
    </div>
  )
}

export default PrevOrder