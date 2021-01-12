import React from 'react'

const SelectOpt = React.forwardRef((props, ref) => {

    return <select ref={ref} className="my-6 pl-2 py-1 opacity-80">
        {
            props.list.map((obj, index) => {
                return <option className="w-32 pl-2 py-1" value={obj.val} key={index}>{obj.key}</option>
            })
        }
    </select>
})

export default SelectOpt
