import React from "react";
import "./css/design.css";
import Image from "next/image";
export default function Design() {
  return (
    <div className="scene">
      <div className="cube">
        <div className="side front">
          <Image src="/logo.svg" fill priority />
        </div>
        <div className="side back">
          <Image src="/logo.svg" fill priority />
        </div>
        <div className="side top">
          <Image src="/logo.svg" fill priority />
        </div>
        <div className="side bottom">
          <Image src="/logo.svg" fill priority />
        </div>
        <div className="side left">
          <Image src="/logo.svg" fill priority />
        </div>
        <div className="side right">
          <Image src="/logo.svg" fill priority />
        </div>
      </div>
    </div>
  );
}
