import styled from 'styled-components';

export const ContextHelpStyle = styled.div`
    .tabs {
        display: flex;
        font-size: 20px;
        background: #ccc;
        justify-content: space-around;
    }
    .tab {
        cursor: pointer;
        padding: 10px 30px;
        text-decoration: none;
        transition: all 0.3s;
    }
    .tab:hover {
        background: rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
    }
    .images > img {
        width: 100px;
        height: 100px;
    }
    .videos {
        display: flex;
    }
    .video {
        width: 100%;
        height: 50vh;
    }
`;
