import React from "react";
import getAll from "../utils/getAll";

import FeaturedBooks from "../components/layout/FeaturedBooks";

//TODO: make feature onlhy show 3 books at a time, with a clickablee circle icon to scroll left to next 3, etc.
function FrontPage(props) {
  return (
    <div className="front-page-container">
      <section>
        <div className="front-page--news-container">
          <h2> News </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Tincidunt id aliquet risus feugiat in. Ultrices gravida dictum fusce
            ut placerat orci nulla pellentesque dignissim. Diam quis enim
            lobortis scelerisque fermentum dui faucibus in ornare. Turpis
            egestas integer eget aliquet. Non odio euismod lacinia at quis risus
            sed vulputate odio. Pharetra sit amet aliquam id. Id neque aliquam
            vestibulum morbi. Scelerisque felis imperdiet proin fermentum leo.
            Libero justo laoreet sit amet cursus. Nam aliquam sem et tortor
            consequat. Est sit amet facilisis magna etiam. Sit amet tellus cras
            adipiscing. Pulvinar sapien et ligula ullamcorper malesuada proin
            libero nunc. Adipiscing enim eu turpis egestas pretium aenean.
            Consectetur a erat nam at lectus urna duis. Semper viverra nam
            libero justo laoreet sit amet cursus. Id volutpat lacus laoreet non.
          </p>
          <p>
            Orci a scelerisque purus semper eget duis at tellus. Id donec
            ultrices tincidunt arcu. Tincidunt nunc pulvinar sapien et ligula
            ullamcorper malesuada. Donec pretium vulputate sapien nec sagittis
            aliquam malesuada bibendum arcu. Sapien nec sagittis aliquam
            malesuada bibendum arcu vitae elementum. Viverra maecenas accumsan
            lacus vel facilisis volutpat. Quis lectus nulla at volutpat diam.
            Augue neque gravida in fermentum et sollicitudin ac orci. Dignissim
            convallis aenean et tortor at risus viverra adipiscing. Cum sociis
            natoque penatibus et magnis dis parturient. A iaculis at erat
            pellentesque adipiscing commodo. Mi proin sed libero enim sed
            faucibus turpis in eu. Lacus luctus accumsan tortor posuere ac ut
            consequat semper viverra. Mi bibendum neque egestas congue quisque
            egestas. Eu nisl nunc mi ipsum faucibus vitae aliquet. Nec feugiat
            in fermentum posuere urna nec tincidunt praesent semper. Enim nunc
            faucibus a pellentesque sit amet. Lacus suspendisse faucibus
            interdum posuere. Tempus egestas sed sed risus pretium quam
            vulputate.
          </p>
        </div>
      </section>
      <section className="front-page--featured-container">
        <h2>Featured Books</h2>
        <FeaturedBooks />
      </section>
    </div>
  );
}

export default FrontPage;
