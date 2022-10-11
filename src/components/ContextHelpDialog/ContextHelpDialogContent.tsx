import React from 'react';
import { ContextHelpDialogContentStyle } from './ContextHelpDialogContentStyle.styled';

export interface IContextHelpDialogContentProps {
    name: string;

    content: any;
}

const ContextHelpDialogContent: React.FC<IContextHelpDialogContentProps> = (props: IContextHelpDialogContentProps) => {
    return (
        <ContextHelpDialogContentStyle>
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
                                    <video className="video" autoPlay loop key={vid.id} controls>
                                        <source src={vid.publicUrl} />
                                    </video>
                                ))}
                            </div>
                            <p>{props.content.content}</p>
                        </div>
                    )}
                </>
            )}
        </ContextHelpDialogContentStyle>
    );
};

export default ContextHelpDialogContent;
