import React, { useEffect, useState } from 'react';
import { MemoryRouter, Route, Routes, Link } from 'react-router-dom';

export interface IContentProps {
    topic: string;
    slug: string;
    questions: string;
    images: Array<any>;
    content: any;
}

const Content: React.FC<IContentProps> = (props: IContentProps) => {
    return (
        <div className="tab-content">
            {props && (
                <>
                    <h3>{props.topic}</h3>
                    <h4>{props.slug}</h4>
                    <p>{props.questions}</p>

                    <div className="images">
                        {props.images.map((img: any) => (
                            <img src={`${img.downloadUrl}`} title={img.name} alt={img.name} key={img.id} />
                        ))}
                    </div>

                    {props.content && (
                        <div className="content">
                            <h3>Content</h3>
                            <h4>{props.content.title}</h4>
                            <div className="images">
                                {props.content.image.map((img: any) => (
                                    <img src={`${img.downloadUrl}`} title={img.name} alt={img.name} key={img.id} />
                                ))}
                            </div>
                            <div className="videos">
                                {props.content.video.map((vid: any) => (
                                    <video className="video" autoPlay loop key={vid.id}>
                                        <source src={vid.publicUrl} />
                                    </video>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Content;
