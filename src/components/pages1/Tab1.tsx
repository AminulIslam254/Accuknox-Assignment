import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { tabDataInterface } from '../TypeImplements';
import { setDeleteWigdet } from '../../redux/actions/ProductActions';

const Tab1 = memo(() => {
    //redux part
    const dispatch=useDispatch();
    const products: { allProducts: { data: Array<Array<tabDataInterface>> } } = useSelector((state: { allProducts: { data: Array<Array<tabDataInterface>> } }) => state);
    
    const [data, setData] = useState(products.allProducts.data);
    const [renderKey, setRenderKey] = useState(10);

    //function to delete widget when clicked on crossbar
    const deleteWidget=(id:string)=>{
        dispatch(setDeleteWigdet({id,index:0}));
        setRenderKey(Math.random())
        window.location.reload()
    }
    return (
        <div >
            <h1 style={{ }}>CSPM</h1>
            <div key={renderKey} style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    data[0] && data[0].map((val, ind) => {
                        return (
                            (val.isVisible)?<div key={val.id} style={{ height: "fit-content", width: 250, border: "2px solid" }}>
                                <div style={{display:"flex",justifyContent:"flex-end"}}><span onClick={()=>deleteWidget(val.id)} style={{marginRight:5,cursor:"pointer"}}>x</span></div>
                                <p>{val.title}</p>
                                <p>{val.content}</p>
                            </div>:<></>
                        )
                    })
                }
            </div>
        </div >
    )
})

export default Tab1