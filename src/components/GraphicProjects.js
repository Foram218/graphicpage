import React from "react";

function GraphicProjects(props) {
  return (
    <div className="h-[300px] lg:h-[400px] aspect-square m-[34px] border-solid border-2 border-slate-800 rounded-3xl p-2">
      <img
        src={props.img}
        //  className={styles.mainImage}
        className={`m-0 h-full w-full rounded-3xl`}
      />
    </div>
  );
}

export default GraphicProjects;
