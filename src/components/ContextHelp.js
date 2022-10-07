import React, { useEffect, useState } from 'react';
import ContextHelpService from '../modules/contextHelp/contextHelpService';
import { MemoryRouter, Route, Routes, Link } from "react-router-dom";
import "../styles/ContextHelp.css";

const ContextHelp = (props)=>{
    const [rows,setRows] = useState([]);

    const fetchContextHelp = async()=>{
        const res = await ContextHelpService.list(null,null,null,null);
        setRows(res.rows);
    }

    useEffect(()=>{
        fetchContextHelp();
    },[rows]);

    return (
        <>
        <MemoryRouter>
            <Tabs rows={rows}/>
            <Routes>
                {rows.map((item)=>(
                    <Route key={item.id} path={`/${item.id}`} element={<Content {...props} row={item}/>} />
                ))}
            </Routes>
        </MemoryRouter>
        </>
    );
}

const Tabs = ({rows})=>{
    return (
        <nav class="tabs">
            {rows.map((item)=>(
                <Link to={`/${item.id}`} key={item.id} class="tab">
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}


const Content = ({row})=>{
    return (
        <div class="tab-content">
            {
                row &&
                <>
                    <h3>{row.topic}</h3>
                    <h4>{row.slug}</h4>
                    <p>{row.questions}</p>
                    
                    <div class="images">
                        {row.images.map((img)=>
                            <img src={`${img.downloadUrl}`} title={img.name} alt={img.name} key={img.id}/>
                        )}
                    </div> 

                    {
                        row.content &&
                        <div class="content">
                            <h3>Content</h3>
                            <h4>{row.content.title}</h4>
                            <div class="images">
                                {row.content.image.map((img)=>
                                    <img src={`${img.downloadUrl}`} title={img.name} alt={img.name} key={img.id}/>
                                )}
                            </div>
                            <div class="videos">
                                {row.content.video.map((vid)=>(
                                    <video class="video" autoPlay loop key={vid.id}>
                                        <source src={vid.publicUrl} />
                                    </video>)
                                )}
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    );
}

export default ContextHelp;