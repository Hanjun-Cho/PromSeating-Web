import "./Tables.css"
import {useEffect, useState} from "react";
import axios from "axios";
import useWindowDimensions from "./window";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
import {toast} from "react-toastify";

const Tables = ({tableSelected, handleTableSelection, formStage}) => {
    useEffect(() => {
        axios.defaults.baseURL = 'http://49.234.36.140:81';
        axios.get('/get-data').then((response) => {
            response.data.forEach((table) => {
                if (table.reserved) {
                    document.getElementById(table.id).classList.add('reserved');
                }
            })
        })
    }, [])

    const {height, width} = useWindowDimensions();

    async function tableClicked(event, zoomToElement) {
        let table = event.target;
        if (table.classList.contains('reserved') || formStage !== 0) {
            toast.error("table already reserved");
            return;
        };
        handleTableSelection(table.id);
        if (tableSelected.length === 0) {
            await new Promise(r => setTimeout(r, 300));
        }
        console.log(tableSelected);
        zoomToElement(table);
    }

    return (
        <div className="canvas">
            <TransformWrapper panning={{disabled: formStage !== 0}}>
                {({setTransform, zoomToElement}) => (
                    <TransformComponent>
                        <svg
                            width={width}
                            height={height - ((tableSelected.length === 0) ? 0 : 250) - 50}
                            viewBox="0 0 3840 2160"
                            version="1.1"
                            id="SVGRoot"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnssvg="http://www.w3.org/2000/svg">
                            <defs
                                id="defs325"/>
                            <g
                                id="layer1">
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16821">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 363.90512,1468.7837 c -0.57236,0 -1.11369,-0.1276 -1.67915,-0.1724 v -44.4784 c 0.56546,-0.045 1.10679,-0.1724 1.67915,-0.1724 12.06088,0 21.83924,10.0335 21.83924,19.3084 0,15.4813 -9.77836,25.5148 -21.83924,25.5148 z"
                                        id="path3734"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 363.90512,1396.377 c -0.57236,0 -1.11369,-0.1276 -1.67915,-0.1724 v -44.4785 c 0.56546,-0.045 1.10679,-0.1723 1.67915,-0.1723 12.06088,0 21.83924,10.0335 21.83924,19.3084 0,15.4812 -9.77836,25.5148 -21.83924,25.5148 z"
                                        id="path3736"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 250.56794,1396.2046 c -0.56547,0.045 -1.10679,0.1724 -1.6826,0.1724 -12.05744,0 -21.83579,-10.0336 -21.83579,-25.5148 0,-9.2749 9.77835,-19.3084 21.83579,-19.3084 0.57581,0 1.11713,0.1275 1.6826,0.1723 z"
                                        id="path3738"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 250.56794,1468.6113 c -0.56547,0.045 -1.10679,0.1724 -1.6826,0.1724 -12.05744,0 -21.83579,-10.0335 -21.83579,-25.5148 0,-9.2749 9.77835,-19.3084 21.83579,-19.3084 0.57581,0 1.11713,0.1275 1.6826,0.1724 z"
                                        id="path3740"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 28.5,372.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3742"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16849">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 344.16912,1676.3289 c 0.43099,0.3689 0.90336,0.6585 1.31021,1.0654 8.52676,8.5267 8.34402,22.5357 -0.40685,31.29 -8.75087,8.7509 -22.75984,8.9336 -31.28659,0.4034 -0.40686,-0.4068 -0.69994,-0.8792 -1.06542,-1.3102 z"
                                        id="path3746"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 395.36755,1625.1304 c 0.431,0.3655 0.90336,0.6586 1.31022,1.0654 8.52675,8.5268 8.34746,22.5358 -0.40686,31.2866 -8.75086,8.7543 -22.75984,8.9371 -31.28659,0.4069 -0.40686,-0.4069 -0.69993,-0.8792 -1.06541,-1.3102 z"
                                        id="path3748"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 284.96457,1577.6247 c -0.43099,-0.3689 -0.90681,-0.6585 -1.31367,-1.0654 -8.52675,-8.5302 -8.34401,-22.5357 0.40686,-31.29 8.75432,-8.7509 22.75984,-8.9336 31.29004,-0.4069 0.40686,0.4069 0.69649,0.8827 1.06541,1.3137 z"
                                        id="path3750"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 233.76269,1628.8232 c -0.431,-0.369 -0.90336,-0.6586 -1.31022,-1.0655 -8.52675,-8.5267 -8.34401,-22.5357 0.40686,-31.2865 8.75086,-8.7544 22.75984,-8.9371 31.29004,-0.4069 0.40685,0.4069 0.69648,0.8792 1.06196,1.3102 z"
                                        id="path3752"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 50.546,434.105 14.849,14.849 c 1.172,1.172 1.172,3.071 0,4.243 l -29.698,29.698 c -1.172,1.172 -3.071,1.172 -4.243,0 L 16.605,468.046 c -1.172,-1.172 -1.172,-3.071 0,-4.243 l 29.698,-29.698 c 1.172,-1.172 3.071,-1.172 4.243,0 z"
                                        id="path3754"
                                        className="table"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16863">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 855.49837,1639.7738 -31.2004,-31.69 c 0.36549,-0.4344 0.65511,-0.9102 1.05852,-1.3206 8.45779,-8.5957 22.35643,-8.4129 31.04179,0.4069 8.68191,8.8198 8.8612,22.9391 0.39996,31.5314 -0.40341,0.4103 -0.87233,0.7034 -1.29987,1.0723 z"
                                        id="path3758"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 804.70334,1588.1789 -31.20039,-31.69 c 0.36548,-0.4345 0.65166,-0.9103 1.05851,-1.3206 8.4578,-8.5957 22.35644,-8.413 31.03834,0.4069 8.68536,8.8198 8.86465,22.9391 0.40341,31.5314 -0.40341,0.4103 -0.87233,0.7033 -1.29987,1.0723 z"
                                        id="path3760"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 695.16924,1636.0535 31.20384,31.6934 c -0.36548,0.431 -0.65511,0.9103 -1.05852,1.3206 -8.46124,8.5923 -22.35643,8.4095 -31.04179,-0.4103 -8.68191,-8.8198 -8.8612,-22.9357 -0.40341,-31.5314 0.40341,-0.4103 0.87578,-0.7034 1.29988,-1.0723 z"
                                        id="path3762"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 745.96771,1687.6484 31.2004,31.69 c -0.36549,0.4345 -0.65511,0.9137 -1.05852,1.324 -8.46124,8.5923 -22.35643,8.4096 -31.04179,-0.4103 -8.68191,-8.8198 -8.8612,-22.9356 -0.40341,-31.5314 0.40341,-0.4103 0.87578,-0.7033 1.30332,-1.0723 z"
                                        id="path3764"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 151.343,453.401 15.026,-15.026 c 1.172,-1.172 3.071,-1.172 4.243,0 l 30.013,30.013 c 1.172,1.172 1.172,3.071 0,4.243 l -15.026,15.026 c -1.172,1.172 -3.071,1.172 -4.243,0 l -30.013,-30.013 c -1.172,-1.172 -1.172,-3.071 0,-4.243 z"
                                        id="path3766"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16835">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 605.2608,1468.7837 c -0.57236,0 -1.11369,-0.1276 -1.67915,-0.1724 v -44.4784 c 0.56546,-0.045 1.10679,-0.1724 1.67915,-0.1724 12.06089,0 21.83924,10.0335 21.83924,19.3084 0,15.4813 -9.77835,25.5148 -21.83924,25.5148 z"
                                        id="path3770"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 605.2608,1396.377 c -0.57236,0 -1.11369,-0.1276 -1.67915,-0.1724 v -44.4785 c 0.56546,-0.045 1.10679,-0.1723 1.67915,-0.1723 12.06089,0 21.83924,10.0335 21.83924,19.3084 0,15.4812 -9.77835,25.5148 -21.83924,25.5148 z"
                                        id="path3772"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 491.92362,1396.2046 c -0.56546,0.045 -1.10679,0.1724 -1.6826,0.1724 -12.05744,0 -21.83579,-10.0336 -21.83579,-25.5148 0,-9.2749 9.77835,-19.3084 21.83579,-19.3084 0.57581,0 1.11714,0.1275 1.6826,0.1723 z"
                                        id="path3774"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 491.92362,1468.6113 c -0.56546,0.045 -1.10679,0.1724 -1.6826,0.1724 -12.05744,0 -21.83579,-10.0335 -21.83579,-25.5148 0,-9.2749 9.77835,-19.3084 21.83579,-19.3084 0.57581,0 1.11714,0.1275 1.6826,0.1724 z"
                                        id="path3776"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 98.5,371.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3778"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16842">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 608.70874,1686.0038 c -0.57236,0 -1.11369,-0.1276 -1.67915,-0.1724 v -44.4784 c 0.56546,-0.045 1.10679,-0.1724 1.67915,-0.1724 12.06088,0 21.83924,10.0335 21.83924,19.3084 0,15.4813 -9.77836,25.5148 -21.83924,25.5148 z"
                                        id="path3782"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 608.70874,1613.5971 c -0.57236,0 -1.11369,-0.1276 -1.67915,-0.1724 v -44.4784 c 0.56546,-0.045 1.10679,-0.1724 1.67915,-0.1724 12.06088,0 21.83924,10.0335 21.83924,19.3084 0,15.4813 -9.77836,25.5148 -21.83924,25.5148 z"
                                        id="path3784"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 495.37156,1613.4247 c -0.56547,0.045 -1.10679,0.1724 -1.6826,0.1724 -12.05744,0 -21.83579,-10.0335 -21.83579,-25.5148 0,-9.2749 9.77835,-19.3084 21.83579,-19.3084 0.57581,0 1.11713,0.1275 1.6826,0.1724 z"
                                        id="path3786"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 495.37156,1685.8314 c -0.56547,0.045 -1.10679,0.1724 -1.6826,0.1724 -12.05744,0 -21.83579,-10.0335 -21.83579,-25.5148 0,-9.2749 9.77835,-19.3084 21.83579,-19.3084 0.57581,0 1.11713,0.1275 1.6826,0.1724 z"
                                        id="path3788"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 99.5,434.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3790"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16856">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 853.51236,1472.2316 c -0.57236,0 -1.11369,-0.1276 -1.67915,-0.1724 v -44.4784 c 0.56546,-0.045 1.10679,-0.1724 1.67915,-0.1724 12.06088,0 21.83924,10.0335 21.83924,19.3084 0,15.4813 -9.77836,25.5148 -21.83924,25.5148 z"
                                        id="path3794"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 853.51236,1399.8249 c -0.57236,0 -1.11369,-0.1276 -1.67915,-0.1724 v -44.4784 c 0.56546,-0.045 1.10679,-0.1724 1.67915,-0.1724 12.06088,0 21.83924,10.0335 21.83924,19.3084 0,15.4813 -9.77836,25.5148 -21.83924,25.5148 z"
                                        id="path3796"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 740.17518,1399.6525 c -0.56547,0.045 -1.10679,0.1724 -1.6826,0.1724 -12.05744,0 -21.83579,-10.0335 -21.83579,-25.5148 0,-9.2749 9.77835,-19.3084 21.83579,-19.3084 0.57581,0 1.11713,0.1276 1.6826,0.1724 z"
                                        id="path3798"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 740.17518,1472.0592 c -0.56547,0.045 -1.10679,0.1724 -1.6826,0.1724 -12.05744,0 -21.83579,-10.0335 -21.83579,-25.5148 0,-9.2749 9.77835,-19.3084 21.83579,-19.3084 0.57581,0 1.11713,0.1276 1.6826,0.1724 z"
                                        id="path3800"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 170.5,372.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3802"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16884">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1098.316,1437.7522 c -0.5723,0 -1.1137,-0.1276 -1.6791,-0.1724 v -44.4784 c 0.5654,-0.045 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.3085 0,15.4812 -9.7784,25.5147 -21.8393,25.5147 z"
                                        id="path3806"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1098.316,1365.3455 c -0.5723,0 -1.1137,-0.1276 -1.6791,-0.1724 v -44.4784 c 0.5654,-0.045 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.3085 0,15.4812 -9.7784,25.5147 -21.8393,25.5147 z"
                                        id="path3808"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 984.97884,1365.1731 c -0.5654,0.045 -1.1067,0.1724 -1.6825,0.1724 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.5147 0,-9.275 9.7783,-19.3085 21.8358,-19.3085 0.5758,0 1.1171,0.1276 1.6825,0.1724 z"
                                        id="path3810"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 984.97884,1437.5798 c -0.5654,0.045 -1.1067,0.1724 -1.6825,0.1724 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.5147 0,-9.275 9.7783,-19.3085 21.8358,-19.3085 0.5758,0 1.1171,0.1276 1.6825,0.1724 z"
                                        id="path3812"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 241.5,361.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3814"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16976">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1612.2769,1141.2295 c -0.5724,0 -1.1137,-0.1276 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3085 0,15.4812 -9.7783,25.5147 -21.8392,25.5147 z"
                                        id="path3818"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1612.2769,1068.8228 c -0.5724,0 -1.1137,-0.1276 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3085 0,15.4812 -9.7783,25.5147 -21.8392,25.5147 z"
                                        id="path3820"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1498.9397,1068.6504 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5147 0,-9.275 9.7784,-19.3085 21.8358,-19.3085 0.5758,0 1.1171,0.1276 1.6826,0.1724 z"
                                        id="path3822"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1498.9397,1141.0571 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5147 0,-9.275 9.7784,-19.3085 21.8358,-19.3085 0.5758,0 1.1171,0.1276 1.6826,0.1724 z"
                                        id="path3824"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 357.5,276.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3826"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16969">
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 359.5,220.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3830"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1619.1727,948.145 c -0.5723,0 -1.1136,-0.12757 -1.6791,-0.1724 v -44.4784 c 0.5655,-0.0448 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.30846 0,15.48124 -9.7784,25.51474 -21.8393,25.51474 z"
                                        id="path3834"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1619.1727,875.7383 c -0.5723,0 -1.1136,-0.12758 -1.6791,-0.1724 v -44.4784 c 0.5655,-0.0448 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.30845 0,15.48125 -9.7784,25.51475 -21.8393,25.51475 z"
                                        id="path3836"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1505.8356,875.5659 c -0.5655,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.51475 0,-9.27495 9.7783,-19.30845 21.8358,-19.30845 0.5758,0 1.1171,0.12757 1.6826,0.1724 z"
                                        id="path3838"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1505.8356,947.9726 c -0.5655,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27496 9.7783,-19.30846 21.8358,-19.30846 0.5758,0 1.1171,0.12758 1.6826,0.1724 z"
                                        id="path3840"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16962">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1619.1727,741.2687 c -0.5723,0 -1.1136,-0.12757 -1.6791,-0.17239 V 696.6179 c 0.5655,-0.0448 1.1068,-0.17239 1.6791,-0.17239 12.0609,0 21.8393,10.0335 21.8393,19.30845 0,15.48124 -9.7784,25.51474 -21.8393,25.51474 z"
                                        id="path3842"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1619.1727,668.862 c -0.5723,0 -1.1136,-0.12757 -1.6791,-0.1724 v -44.4784 c 0.5655,-0.0448 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.30846 0,15.48124 -9.7784,25.51474 -21.8393,25.51474 z"
                                        id="path3844"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1505.8356,668.6896 c -0.5655,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27496 9.7783,-19.30846 21.8358,-19.30846 0.5758,0 1.1171,0.12757 1.6826,0.1724 z"
                                        id="path3846"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1505.8356,741.09631 c -0.5655,0.0448 -1.1068,0.17239 -1.6826,0.17239 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27495 9.7783,-19.30845 21.8358,-19.30845 0.5758,0 1.1171,0.12757 1.6826,0.17239 z"
                                        id="path3848"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 359.5,160.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3850"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16955">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1619.1727,475.77745 c -0.5723,0 -1.1136,-0.12757 -1.6791,-0.17239 v -44.47841 c 0.5655,-0.0448 1.1068,-0.17239 1.6791,-0.17239 12.0609,0 21.8393,10.0335 21.8393,19.30845 0,15.48124 -9.7784,25.51474 -21.8393,25.51474 z"
                                        id="path3854"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1619.1727,403.37075 c -0.5723,0 -1.1136,-0.12757 -1.6791,-0.1724 v -44.4784 c 0.5655,-0.0448 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.30846 0,15.48124 -9.7784,25.51474 -21.8393,25.51474 z"
                                        id="path3856"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1505.8356,403.19835 c -0.5655,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27496 9.7783,-19.30846 21.8358,-19.30846 0.5758,0 1.1171,0.12758 1.6826,0.1724 z"
                                        id="path3858"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1505.8356,475.60506 c -0.5655,0.0448 -1.1068,0.17239 -1.6826,0.17239 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27495 9.7783,-19.30845 21.8358,-19.30845 0.5758,0 1.1171,0.12757 1.6826,0.17239 z"
                                        id="path3860"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1619.1727,544.73622 c -0.5723,0 -1.1136,-0.12757 -1.6791,-0.1724 v -44.4784 c 0.5655,-0.0448 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.30846 0,15.48124 -9.7784,25.51474 -21.8393,25.51474 z"
                                        id="path3862"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1505.8356,544.56382 c -0.5655,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0575,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27496 9.7783,-19.30846 21.8358,-19.30846 0.5758,0 1.1171,0.12758 1.6826,0.1724 z"
                                        id="path3864"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 359.5,88.5 h 21 c 1.657,0 3,1.343 3,3 v 53 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -53 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3866"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16994">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1884.664,465.43364 c -0.5724,0 -1.1137,-0.12757 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.0448 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.30846 0,15.48124 -9.7783,25.51474 -21.8392,25.51474 z"
                                        id="path3870"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1884.664,393.02694 c -0.5724,0 -1.1137,-0.12758 -1.6792,-0.1724 v -44.47841 c 0.5655,-0.0448 1.1068,-0.17239 1.6792,-0.17239 12.0609,0 21.8392,10.0335 21.8392,19.30845 0,15.48124 -9.7783,25.51475 -21.8392,25.51475 z"
                                        id="path3872"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1771.3268,392.85454 c -0.5654,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.03351 -21.8358,-25.51475 0,-9.27495 9.7784,-19.30845 21.8358,-19.30845 0.5758,0 1.1172,0.12757 1.6826,0.17239 z"
                                        id="path3874"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1771.3268,465.26124 c -0.5654,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27496 9.7784,-19.30846 21.8358,-19.30846 0.5758,0 1.1172,0.12758 1.6826,0.1724 z"
                                        id="path3876"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1884.664,534.39241 c -0.5724,0 -1.1137,-0.12758 -1.6792,-0.1724 V 489.7416 c 0.5655,-0.0448 1.1068,-0.17239 1.6792,-0.17239 12.0609,0 21.8392,10.0335 21.8392,19.30845 0,15.48124 -9.7783,25.51475 -21.8392,25.51475 z"
                                        id="path3878"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1771.3268,534.22001 c -0.5654,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.03351 -21.8358,-25.51475 0,-9.27495 9.7784,-19.30845 21.8358,-19.30845 0.5758,0 1.1172,0.12757 1.6826,0.17239 z"
                                        id="path3880"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 436.5,85.5 h 21 c 1.657,0 3,1.343 3,3 v 53 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -53 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3882"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17008">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1895.0078,737.82077 c -0.5723,0 -1.1137,-0.12758 -1.6791,-0.1724 v -44.47841 c 0.5654,-0.0448 1.1068,-0.17239 1.6791,-0.17239 12.0609,0 21.8392,10.0335 21.8392,19.30845 0,15.48124 -9.7783,25.51475 -21.8392,25.51475 z"
                                        id="path3886"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1895.0078,665.41406 c -0.5723,0 -1.1137,-0.12757 -1.6791,-0.1724 v -44.4784 c 0.5654,-0.0448 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.30846 0,15.48124 -9.7783,25.51474 -21.8392,25.51474 z"
                                        id="path3888"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1781.6706,665.24166 c -0.5654,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27496 9.7784,-19.30846 21.8358,-19.30846 0.5758,0 1.1172,0.12758 1.6826,0.1724 z"
                                        id="path3890"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1781.6706,737.64837 c -0.5654,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.03351 -21.8358,-25.51475 0,-9.27495 9.7784,-19.30845 21.8358,-19.30845 0.5758,0 1.1172,0.12757 1.6826,0.17239 z"
                                        id="path3892"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 439.5,159.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3894"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17022">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1901.9037,951.59294 c -0.5724,0 -1.1137,-0.12757 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.0448 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.30846 0,15.48124 -9.7783,25.51474 -21.8392,25.51474 z"
                                        id="path3898"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1901.9037,879.18624 c -0.5724,0 -1.1137,-0.12758 -1.6792,-0.1724 v -44.47841 c 0.5655,-0.0448 1.1068,-0.17239 1.6792,-0.17239 12.0609,0 21.8392,10.0335 21.8392,19.30845 0,15.48124 -9.7783,25.51475 -21.8392,25.51475 z"
                                        id="path3900"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1788.5665,879.01384 c -0.5655,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.03351 -21.8358,-25.51475 0,-9.27495 9.7784,-19.30845 21.8358,-19.30845 0.5758,0 1.1171,0.12757 1.6826,0.17239 z"
                                        id="path3902"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1788.5665,951.42054 c -0.5655,0.0448 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.51474 0,-9.27496 9.7784,-19.30846 21.8358,-19.30846 0.5758,0 1.1171,0.12758 1.6826,0.1724 z"
                                        id="path3904"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 441.5,222.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3906"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17036">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1901.9037,1137.7816 c -0.5724,0 -1.1137,-0.1276 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3084 0,15.4813 -9.7783,25.5148 -21.8392,25.5148 z"
                                        id="path3910"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1901.9037,1065.3749 c -0.5724,0 -1.1137,-0.1276 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3084 0,15.4813 -9.7783,25.5148 -21.8392,25.5148 z"
                                        id="path3912"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1788.5665,1065.2025 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5148 0,-9.2749 9.7784,-19.3084 21.8358,-19.3084 0.5758,0 1.1171,0.1275 1.6826,0.1724 z"
                                        id="path3914"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1788.5665,1137.6092 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5148 0,-9.2749 9.7784,-19.3084 21.8358,-19.3084 0.5758,0 1.1171,0.1276 1.6826,0.1724 z"
                                        id="path3916"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 441.5,276.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3918"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17050">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2712.1692,1268.8032 c -0.5724,0 -1.1137,-0.1275 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3085 0,15.4812 -9.7783,25.5147 -21.8392,25.5147 z"
                                        id="path3922"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2712.1692,1196.3965 c -0.5724,0 -1.1137,-0.1275 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3085 0,15.4812 -9.7783,25.5147 -21.8392,25.5147 z"
                                        id="path3924"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2598.832,1196.2241 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5147 0,-9.275 9.7784,-19.3085 21.8358,-19.3085 0.5758,0 1.1171,0.1276 1.6826,0.1724 z"
                                        id="path3926"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2598.832,1268.6308 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5147 0,-9.275 9.7784,-19.3085 21.8358,-19.3085 0.5758,0 1.1171,0.1276 1.6826,0.1724 z"
                                        id="path3928"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 676.5,312.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3930"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17057">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2715.6171,1461.8878 c -0.5723,0 -1.1137,-0.1276 -1.6791,-0.1724 v -44.4784 c 0.5654,-0.045 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.3084 0,15.4813 -9.7784,25.5148 -21.8393,25.5148 z"
                                        id="path3934"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2715.6171,1389.4811 c -0.5723,0 -1.1137,-0.1276 -1.6791,-0.1724 v -44.4784 c 0.5654,-0.045 1.1068,-0.1724 1.6791,-0.1724 12.0609,0 21.8393,10.0335 21.8393,19.3084 0,15.4813 -9.7784,25.5148 -21.8393,25.5148 z"
                                        id="path3936"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2602.2799,1389.3087 c -0.5654,0.045 -1.1067,0.1724 -1.6826,0.1724 -12.0574,0 -21.8357,-10.0335 -21.8357,-25.5148 0,-9.2749 9.7783,-19.3084 21.8357,-19.3084 0.5759,0 1.1172,0.1275 1.6826,0.1724 z"
                                        id="path3938"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2602.2799,1461.7154 c -0.5654,0.045 -1.1067,0.1724 -1.6826,0.1724 -12.0574,0 -21.8357,-10.0335 -21.8357,-25.5148 0,-9.2749 9.7783,-19.3084 21.8357,-19.3084 0.5759,0 1.1172,0.1276 1.6826,0.1724 z"
                                        id="path3940"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 677.5,369.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path3942"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16877">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1318.9841,1434.3043 c -0.5724,0 -1.1137,-0.1276 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3084 0,15.4813 -9.7783,25.5148 -21.8392,25.5148 z"
                                        id="path4006"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1318.9841,1361.8976 c -0.5724,0 -1.1137,-0.1276 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3084 0,15.4813 -9.7783,25.5148 -21.8392,25.5148 z"
                                        id="path4008"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1205.6469,1361.7252 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5148 0,-9.2749 9.7784,-19.3084 21.8358,-19.3084 0.5758,0 1.1171,0.1275 1.6826,0.1724 z"
                                        id="path4010"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1205.6469,1434.1319 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5148 0,-9.2749 9.7784,-19.3084 21.8358,-19.3084 0.5758,0 1.1171,0.1275 1.6826,0.1724 z"
                                        id="path4012"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 305.5,361.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path4014"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16870">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1553.4439,1434.3043 c -0.5724,0 -1.1137,-0.1276 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3084 0,15.4813 -9.7783,25.5148 -21.8392,25.5148 z"
                                        id="path4018"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1553.4439,1361.8976 c -0.5724,0 -1.1137,-0.1276 -1.6792,-0.1724 v -44.4784 c 0.5655,-0.045 1.1068,-0.1724 1.6792,-0.1724 12.0609,0 21.8392,10.0335 21.8392,19.3084 0,15.4813 -9.7783,25.5148 -21.8392,25.5148 z"
                                        id="path4020"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1440.1067,1361.7252 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5148 0,-9.2749 9.7784,-19.3084 21.8358,-19.3084 0.5758,0 1.1171,0.1275 1.6826,0.1724 z"
                                        id="path4022"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1440.1067,1434.1319 c -0.5655,0.045 -1.1068,0.1724 -1.6826,0.1724 -12.0574,0 -21.8358,-10.0335 -21.8358,-25.5148 0,-9.2749 9.7784,-19.3084 21.8358,-19.3084 0.5758,0 1.1171,0.1275 1.6826,0.1724 z"
                                        id="path4024"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 373.5,361.5 h 21 c 1.657,0 3,1.343 3,3 v 42 c 0,1.657 -1.343,3 -3,3 h -21 c -1.657,0 -3,-1.343 -3,-3 v -42 c 0,-1.657 1.343,-3 3,-3 z"
                                        id="path4026"
                                        transform="matrix(3.4479383,0,0,3.4479383,171.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16928">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1277.0373,274.73507 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67914 0,12.06089 -10.0335,21.83925 -22.4116,21.83925 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83925 0,-0.57235 0.1275,-1.11368 0.1724,-1.67914 z"
                                        id="path4030"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1349.444,274.73507 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67914 0,12.06089 -10.0335,21.83925 -22.4116,21.83925 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83925 0,-0.57235 0.1276,-1.11368 0.1724,-1.67914 z"
                                        id="path4032"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1304.9656,163.07703 c -0.045,-0.56546 -0.1724,-1.10678 -0.1724,-1.68259 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4034"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1232.5589,163.07703 c -0.045,-0.56546 -0.1724,-1.10678 -0.1724,-1.68259 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4036"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 316.5,39.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4038"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16905">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1046.0254,481.61137 c 0.045,0.56546 0.1724,1.10678 0.1724,1.67914 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3782,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1275,-1.11368 0.1723,-1.67914 z"
                                        id="path4042"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1118.4321,481.61137 c 0.045,0.56546 0.1724,1.10678 0.1724,1.67914 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11368 0.1724,-1.67914 z"
                                        id="path4044"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1073.9537,369.95333 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.68259 0,-12.05744 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.77836 22.4116,21.8358 0,0.5758 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4046"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1001.547,369.95333 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.68259 0,-12.05744 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.77836 22.4116,21.8358 0,0.5758 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4048"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 250.5,99.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4050"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16921">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1090.8486,281.63094 c 0.045,0.56547 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11368 0.1724,-1.67915 z"
                                        id="path4054"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1163.2553,281.63094 c 0.045,0.56547 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11368 0.1724,-1.67915 z"
                                        id="path4056"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1118.7769,169.97291 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.68259 0,-12.05744 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.77836 22.4116,21.8358 0,0.5758 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4058"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1046.3702,169.97291 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.68259 0,-12.05744 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.77836 22.4116,21.8358 0,0.5758 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4060"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1018.4419,281.63094 c 0.045,0.56547 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.41165,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.12757,-1.11368 0.1724,-1.67915 z"
                                        id="path4062"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 973.96345,169.97291 c -0.0448,-0.56546 -0.1724,-1.10679 -0.1724,-1.68259 0,-12.05744 10.0335,-21.8358 22.4116,-21.8358 12.37815,0 22.41165,9.77836 22.41165,21.8358 0,0.5758 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4064"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 256.5,41.5 v 21 c 0,1.657 -1.343,3 -3,3 h -52 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 52 c 1.657,0 3,1.343 3,3 z"
                                        id="path4066"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16985">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2145.9177,309.21445 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4070"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2218.3244,309.21445 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4072"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2173.846,197.55642 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1275,1.11714 -0.1724,1.6826 z"
                                        id="path4074"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2101.4393,197.55642 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11714 -0.1724,1.6826 z"
                                        id="path4076"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2073.511,309.21445 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4078"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2029.0326,197.55642 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11714 -0.1724,1.6826 z"
                                        id="path4080"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 562.5,49.5 v 21 c 0,1.657 -1.343,3 -3,3 h -52 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 52 c 1.657,0 3,1.343 3,3 z"
                                        id="path4082"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16912">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1277.0373,478.16343 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67914 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57235 0.1275,-1.11368 0.1724,-1.67914 z"
                                        id="path4086"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1349.444,478.16343 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67914 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57235 0.1276,-1.11368 0.1724,-1.67914 z"
                                        id="path4088"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1304.9656,366.50539 c -0.045,-0.56546 -0.1724,-1.10678 -0.1724,-1.68259 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4090"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1232.5589,366.50539 c -0.045,-0.56546 -0.1724,-1.10678 -0.1724,-1.68259 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4092"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 315.5,98.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4094"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17001">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2087.3028,516.09075 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67914 0,12.06089 -10.0335,21.83925 -22.4116,21.83925 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83925 0,-0.57235 0.1275,-1.11368 0.1724,-1.67914 z"
                                        id="path4098"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2159.7095,516.09075 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67914 0,12.06089 -10.0335,21.83925 -22.4116,21.83925 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83925 0,-0.57235 0.1276,-1.11368 0.1724,-1.67914 z"
                                        id="path4100"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2115.2311,404.43272 c -0.045,-0.56547 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.6826 z"
                                        id="path4102"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2042.8244,404.43272 c -0.045,-0.56547 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.6826 z"
                                        id="path4104"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 551.5,109.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4106"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16946">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1718.3734,247.15156 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1275,-1.11369 0.1724,-1.67915 z"
                                        id="path4110"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1790.7801,247.15156 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4112"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1746.3017,135.49353 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11714 -0.1724,1.6826 z"
                                        id="path4114"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1673.895,135.49353 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11714 -0.1724,1.6826 z"
                                        id="path4116"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1859.7388,247.15156 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4118"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1932.1456,247.15156 c 0.045,0.56546 0.1723,1.10679 0.1723,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.378,0 -22.4115,-9.77835 -22.4115,-21.83924 0,-0.57236 0.1275,-1.11369 0.1723,-1.67915 z"
                                        id="path4120"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1887.6671,135.49353 c -0.045,-0.56546 -0.1723,-1.10679 -0.1723,-1.6826 0,-12.05744 10.0335,-21.83579 22.4115,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1275,1.11714 -0.1723,1.6826 z"
                                        id="path4122"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1815.2604,135.49353 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1275,1.11714 -0.1724,1.6826 z"
                                        id="path4124"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 481.5,31.5 v 21 c 0,1.657 -1.343,3 -3,3 h -75 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 75 c 1.657,0 3,1.343 3,3 z"
                                        id="path4126"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17015">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2087.3028,736.7588 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06088 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83924 0,-0.57236 0.1275,-1.11369 0.1724,-1.67915 z"
                                        id="path4130"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2159.7095,736.7588 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06088 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4132"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2115.2311,625.10077 c -0.045,-0.56547 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.6826 z"
                                        id="path4134"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2042.8244,625.10077 c -0.045,-0.56547 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.6826 z"
                                        id="path4136"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 551.5,173.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4138"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17029">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2083.8548,936.73922 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4142"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2156.2615,936.73922 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4144"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2111.7831,825.08119 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1275,1.11714 -0.1724,1.6826 z"
                                        id="path4146"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2039.3764,825.08119 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1275,1.11714 -0.1724,1.6826 z"
                                        id="path4148"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 550.5,231.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4150"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16898">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1270.1414,688.48766 c 0.045,0.56547 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11368 0.1724,-1.67915 z"
                                        id="path4154"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1342.5481,688.48766 c 0.045,0.56547 0.1724,1.10679 0.1724,1.67915 0,12.06089 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77835 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11368 0.1724,-1.67915 z"
                                        id="path4156"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1298.0697,576.82963 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.68259 0,-12.05744 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.77836 22.4116,21.8358 0,0.5758 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4158"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1225.663,576.82963 c -0.045,-0.56546 -0.1724,-1.10679 -0.1724,-1.68259 0,-12.05744 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.77836 22.4116,21.8358 0,0.5758 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4160"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 314.5,159.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4162"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17064">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2411.409,1461.7217 c 0.045,0.5655 0.1724,1.1068 0.1724,1.6791 0,12.0609 -10.0335,21.8393 -22.4116,21.8393 -12.3781,0 -22.4116,-9.7784 -22.4116,-21.8393 0,-0.5723 0.1275,-1.1136 0.1724,-1.6791 z"
                                        id="path4166"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2483.8157,1461.7217 c 0.045,0.5655 0.1724,1.1068 0.1724,1.6791 0,12.0609 -10.0335,21.8393 -22.4116,21.8393 -12.3781,0 -22.4116,-9.7784 -22.4116,-21.8393 0,-0.5723 0.1276,-1.1136 0.1724,-1.6791 z"
                                        id="path4168"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2439.3373,1350.0637 c -0.045,-0.5655 -0.1724,-1.1068 -0.1724,-1.6826 0,-12.0575 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.7783 22.4116,21.8358 0,0.5758 -0.1276,1.1171 -0.1724,1.6826 z"
                                        id="path4170"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2366.9306,1350.0637 c -0.045,-0.5655 -0.1724,-1.1068 -0.1724,-1.6826 0,-12.0575 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.7783 22.4116,21.8358 0,0.5758 -0.1276,1.1171 -0.1724,1.6826 z"
                                        id="path4172"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 645.5,385.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4174"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,40.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g17043">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2418.3049,1265.1892 c 0.045,0.5655 0.1723,1.1068 0.1723,1.6792 0,12.0608 -10.0335,21.8392 -22.4116,21.8392 -12.378,0 -22.4115,-9.7784 -22.4115,-21.8392 0,-0.5724 0.1275,-1.1137 0.1723,-1.6792 z"
                                        id="path4178"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2490.7116,1265.1892 c 0.045,0.5655 0.1724,1.1068 0.1724,1.6792 0,12.0608 -10.0335,21.8392 -22.4116,21.8392 -12.3781,0 -22.4116,-9.7784 -22.4116,-21.8392 0,-0.5724 0.1275,-1.1137 0.1724,-1.6792 z"
                                        id="path4180"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2446.2332,1153.5312 c -0.045,-0.5655 -0.1724,-1.1068 -0.1724,-1.6826 0,-12.0575 10.0335,-21.8358 22.4116,-21.8358 12.3781,0 22.4116,9.7783 22.4116,21.8358 0,0.5758 -0.1276,1.1171 -0.1724,1.6826 z"
                                        id="path4182"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 2373.8264,1153.5312 c -0.045,-0.5655 -0.1723,-1.1068 -0.1723,-1.6826 0,-12.0575 10.0335,-21.8358 22.4115,-21.8358 12.3781,0 22.4116,9.7783 22.4116,21.8358 0,0.5758 -0.1275,1.1171 -0.1723,1.6826 z"
                                        id="path4184"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 646.5,328.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4186"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,40.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16891">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1046.0254,695.38354 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06088 -10.0335,21.83924 -22.4116,21.83924 -12.3782,0 -22.4116,-9.77836 -22.4116,-21.83924 0,-0.57236 0.1275,-1.11369 0.1723,-1.67915 z"
                                        id="path4234"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1118.4321,695.38354 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67915 0,12.06088 -10.0335,21.83924 -22.4116,21.83924 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83924 0,-0.57236 0.1276,-1.11369 0.1724,-1.67915 z"
                                        id="path4236"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1073.9537,583.72551 c -0.045,-0.56547 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.6826 z"
                                        id="path4238"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1001.547,583.72551 c -0.045,-0.56547 -0.1724,-1.10679 -0.1724,-1.6826 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.6826 z"
                                        id="path4240"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 249.5,161.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4242"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <a
                                    href="/#"
                                    onClick={(e) => {
                                        tableClicked(e, zoomToElement);
                                    }} id="g16935">
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1477.0177,274.73507 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67914 0,12.06089 -10.0335,21.83925 -22.4116,21.83925 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83925 0,-0.57235 0.1276,-1.11368 0.1724,-1.67914 z"
                                        id="path4246"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1549.4244,274.73507 c 0.045,0.56546 0.1724,1.10679 0.1724,1.67914 0,12.06089 -10.0335,21.83925 -22.4116,21.83925 -12.3781,0 -22.4116,-9.77836 -22.4116,-21.83925 0,-0.57235 0.1276,-1.11368 0.1724,-1.67914 z"
                                        id="path4248"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1504.946,163.07703 c -0.045,-0.56546 -0.1724,-1.10678 -0.1724,-1.68259 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4250"/>
                                    <path
                                        fillRule="evenodd"
                                        stroke="#000000"
                                        strokeWidth="3.44794px"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        fill="#000000"
                                        d="m 1432.5393,163.07703 c -0.045,-0.56546 -0.1724,-1.10678 -0.1724,-1.68259 0,-12.05744 10.0335,-21.83579 22.4116,-21.83579 12.3781,0 22.4116,9.77835 22.4116,21.83579 0,0.57581 -0.1276,1.11713 -0.1724,1.68259 z"
                                        id="path4252"/>
                                    <path
                                        fillRule="evenodd"
                                        fill="#ffffff"
                                        d="m 373.5,39.5 v 21 c 0,1.657 -1.343,3 -3,3 h -42 c -1.657,0 -3,-1.343 -3,-3 v -21 c 0,-1.657 1.343,-3 3,-3 h 42 c 1.657,0 3,1.343 3,3 z"
                                        id="path4254"
                                        transform="matrix(3.4479383,0,0,3.4479383,285.92736,46.509138)"
                                        className="table"/>
                                </a>
                                <g id="g18825">
                                    <path
                                        className="wall"
                                        d="M 1701.9463,582.28153 V 1204.3304"
                                        id="path8796"/>
                                    <path
                                        className="wall"
                                        d="m 188.33616,1301.0002 v 453.9276 h 720.82019 v -454.089"
                                        id="path10074"/>
                                    <path
                                        className="wall"
                                        d="m 1386.5,1506.8918 h 1407.4316 v 0 H 2363.2735 V 1506.8918 H 1956.2298 V 1506.8918 H 1023.1563 911.87069"
                                        id="path10078"/>
                                    <path
                                        className="wall"
                                        d="M 2790.1653,1506.8918 V 1100.5731 H 2250.1215 V 64.203278 H 907.66766 V 998.2204"
                                        id="path10080"/>
                                </g>
                            </g>
                        </svg>
                    </TransformComponent>
                )}
            </TransformWrapper>
        </div>
    );
}

export default Tables