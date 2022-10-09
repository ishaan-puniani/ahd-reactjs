import React from 'react';
import { ContextTourContentStyle } from './ContextTourContent.styled';

export interface ITourContentProps {
    name: string;

    content: any;
}

const TourContent: React.FC<ITourContentProps> = (props: ITourContentProps) => {
    return (
        <ContextTourContentStyle>
            {props && (
                <>
                    <h3>{props.name}</h3>

                    {props.content && (
                        <div className="content">
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
                            <p>{props.content.content}</p>
                        </div>
                    )}
                </>
            )}
        </ContextTourContentStyle>
    );
};

export default TourContent;
