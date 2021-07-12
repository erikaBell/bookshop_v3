import React from "react";
import getAll from "../utils/getAll";

import AllBooks from "../components/books/AllBooks";

function FrontPage() {
  return (
    <div>
      <section>
        <AllBooks />
      </section>
    </div>
  );
}

export default FrontPage;
