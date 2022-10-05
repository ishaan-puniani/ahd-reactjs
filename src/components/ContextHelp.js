import React, { useEffect, useState } from 'react';
import ContextHelpService from '../modules/contextHelp/contextHelpService';
import "../styles/ContextHelp.css"

const ContextHelp = (props)=>{
    const [rows,setRows] = useState([]);
    const [activeTab,setActiveTab] = useState(0);

    const fetchContextHelp = async()=>{
        const res = await ContextHelpService.list(null,null,null,null);
        setRows(res.rows);
    }

    useEffect(()=>{
        fetchContextHelp();
    },[rows]);

    const handleTabClick = (i)=>{
        setActiveTab(i);
    }

    return (
        <>
        <div class="tabs">
            {rows.map((item,idx)=>(
                <div onClick={()=>{handleTabClick(idx);}} class="tab">
                    {item.name}
                </div>
            ))}
        </div>
        <div class="tab-content">
            {
                rows[activeTab]?
                <>
                    <h3>{rows[activeTab].topic}</h3>
                    <h4>{rows[activeTab].slug}</h4>
                    <p>{rows[activeTab].questions}</p>
                    
                    <div class="images">
                        {rows[activeTab].images.map((img)=>
                            <img src={`${img.downloadUrl}`} title={img.name} alt={img.name}/>
                        )}
                    </div> 

                    {
                        rows[activeTab].content?
                        <div class="content">
                            <h3>Content</h3>
                            <h4>{rows[activeTab].content.title}</h4>
                            <div class="images">
                                {rows[activeTab].content.image.map((img)=>
                                    <img src={`${img.downloadUrl}`} title={img.name} alt={img.name}/>
                                )}
                            </div>
                            <div class="videos">
                                {rows[activeTab].content.video.map((vid)=>(
                                    <video class="video" autoPlay loop>
                                        <source src={vid.publicUrl} />
                                    </video>)
                                )}
                            </div>
                        </div>
                        :<></>
                    }
                </>
                :<></>
            }
        </div>
        </>
    );
}

export default ContextHelp;