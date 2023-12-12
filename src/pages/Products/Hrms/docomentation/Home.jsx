import Sidebar from "./Sidebar";

const DocumentationHome = () => {
  return (
    <div className="d-flex hrms-doc vh-100 bg-white w-100">
      <Sidebar />
      <div className="doc-content w-100 pt-5">
        <div className="row px-5 mx-5">
          <div className="col-lg-6">
            <h1 className="text-primary">Users</h1>
            <p className="py-4">
              Users are the principal model implemented here. It is needed to
              perform any other task in this <br /> API.
            </p>
          </div>
        </div>
        <div className="row pb-5 create-user px-5 mx-5">
          <div className="col-lg-6">
            <h2 className="fs-3 mt-5 text-primary" id="create-user">
              Create User
            </h2>
            <p>
              Users can be created by issuing a <code>POST</code> request to the{" "}
              <code>/users</code> endpoint. An user is required to have a{" "}
              <code>name</code>. Users with same name are allowed to coexist.
            </p>
            <h5>Attributes</h5>
            <hr />
            <ul className="doc-list p-0">
              <li className="title">
                <p className="m-0">
                  name <code>string</code>
                </p>
              </li>
              <li className="content">
                <p>Name of the user being created</p>
              </li>
            </ul>
            <p>
              API will return the new user record, using the provided name, and
              a generated ID:
            </p>

            <h5>Response Values</h5>
            <hr />
            <ul className="doc-list p-0">
              <li className="title">
                <p>
                  ID <code>string</code>
                </p>
              </li>
              <li className="content">
                <p>Unique ID for the created user</p>
              </li>
              <hr />
              <li className="title">
                <p className="p-0">
                  name <code>string</code>
                </p>
              </li>
              <li className="content">
                <p className="m-0">
                  The user’s name, as provided through the request
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="sidenote">
              <div className="box">
                <div className="title px-3 py-2">
                  <p className="m-0">Request</p>
                </div>
                <div className="pre-code-block p-1">
                  <pre className="chroma">
                    <span className="text-secondary mx-2">1</span>POST /users
                    {"\n"}
                    <span className="text-secondary mx-2">2</span>
                    {"\n"}
                    <span className="text-secondary mx-2">3</span>name=Fefo
                    {"\n"}
                  </pre>
                </div>
              </div>
              <div className="box">
                <div className="title px-3 py-2">
                  <p className="m-0">Response</p>
                </div>
                <div className="pre-code-block p-1">
                  <pre className="chroma ">
                    <span className="text-secondary mx-2">1</span>
                    <span className="">{"{"}</span> {"\n"}
                    <span className="text-secondary mx-2">2</span>{" "}
                    <span className="text-secondary mx-2">&quot;id&quot;</span>
                    <span>:</span>{" "}
                    <span className="">
                      &quot;FA3901CC-F667-4AA0-8CFE-B6B1C5058DFA&quot;
                    </span>
                    <span>,</span> {"\n"}
                    <span className="text-secondary mx-2">3</span>
                    {"  "}
                    <span>&quot;name&quot;</span>
                    <span>:</span> <span className="s2">&quot;Fefo&quot;</span>{" "}
                    {"\n"}
                    <span className="text-secondary mx-2">4</span>
                    <span>{"}"}</span>
                    {"\n"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />

        {/* Get User */}
        <div className="row  pb-5 px-5 mx-5">
          <div className="col-lg-6">
            <div className="content">
              <h2 className="fs-3 mt-5 text-primary" id="get-user">
                Get User
              </h2>
              <p>
                To get all known users, issue a <code>GET</code> request to{" "}
                <code>/users</code>. The endpoint will return a list containing
                all users, together with their IDs
              </p>
              <h5>Attributes</h5>
              <hr />
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0 fw-semibold">
                    ID <code>string</code>
                  </p>
                </li>
                <li className="content">
                  <p className="">Unique ID for the created user</p>
                </li>
                <hr />
                <li className="title">
                  <p className="m-0 fw-semibold">
                    name <code>string</code>
                  </p>
                </li>
                <li className="content">
                  <p>The user’s name</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sidenote">
              <div className="box">
                <div className="title px-3 py-2">
                  <p className="m-0">Request</p>
                </div>
                <div className="pre-code-block">
                  <pre className="chroma p-2">
                    <span className="text-secondary mx-2">1</span>GET /users
                    {"\n"}
                  </pre>
                </div>
              </div>
              <div className="box">
                <div className="title px-3 py-2">
                  <p className="m-0">Response</p>
                </div>
                <div className="pre-code-block py-2">
                  <pre className="chroma">
                    <span className="text-secondary mx-2"> 1</span>
                    <span>[</span>
                    {"\n"}
                    <span className="text-secondary mx-2"> 2</span>
                    {"  "}
                    <span>{"{"}</span>
                    {"\n"}
                    <span className="text-secondary mx-2"> 3</span>
                    {"\t"}
                    <span>&quot;id&quot;</span>
                    <span>:</span>{" "}
                    <span className="s2">
                      &quot;FA3901CC-F667-4AA0-8CFE-B6B1C5058DFA&quot;
                    </span>
                    <span>,</span> {"\n"}
                    <span className="text-secondary mx-2"> 4</span>
                    {"\t"}
                    <span>&quot;name&quot;</span>
                    <span>:</span> <span className="s2">&quot;Fefo&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2"> 5</span>
                    {"  "}
                    <span>{"}"}</span>
                    <span>,</span>
                    {"\n"}
                    <span className="text-secondary mx-2"> 6</span>
                    {"  "}
                    <span>{"{"}</span> {"\n"}
                    <span className="text-secondary mx-2"> 7</span>
                    {"\t"}
                    <span>&quot;id&quot;</span>
                    <span>:</span>{" "}
                    <span className="s2">
                      &quot;BA77D274-12B1-487D-8C9E-72F0D37BAC05&quot;
                    </span>
                    <span>,</span> {"\n"}
                    <span className="text-secondary mx-2"> 8</span>
                    {"\t"}
                    <span>&quot;name&quot;</span>
                    <span>:</span> <span className="s2">&quot;Vito&quot;</span>
                    {"\n"}
                    <span className="text-secondary mx-2"> 9</span>
                    {"  "}
                    <span>{"}"}</span>
                    {"\n"}
                    <span className="text-secondary ms-3 me-1">10</span>
                    <span>]</span>
                    {"\n"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />

        {/* Tasks section */}
        <div className="row  pt-5 px-5 mx-5">
          <div className="col-lg-6">
            <h1 className="text-primary">Tasks</h1>
          </div>
        </div>
        <div className="row pb-5 px-5 mx-5">
          <div className="col-lg-6">
            <div className="content">
              <h2 className="fs-3 mt-5 text-primary" id="creat-task">
                Create Task
              </h2>
              <p>
                In order to create a Task, one must know the User ID to whom the
                task will belong to. Knowing that information, issue a
                <code>POST</code> request to <code>/users/:id/tasks</code>,
                <code>:id</code>
                being replaced with the user’s ID.
              </p>
              <h5 className="text-primary">Attributes</h5>
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    title <code>string</code>
                  </p>
                </li>
                <li className="content">
                  <p>
                    A descriptive name for the task. For example,
                    <code>But milk</code>.
                  </p>
                </li>
              </ul>
              <p>
                The value returned will represent te internal Task object used
                by the API, which will contain two extra fields besides
                <code>title</code>:
              </p>
              <h5>Attributes</h5>
              <ul className="doc-list p-0">
                <li className="title">
                  <p className="m-0">
                    id <code>string</code>
                  </p>
                </li>
                <li className="content">
                  <p>
                    A unique value to identify this task among all other tasks
                  </p>
                </li>
                <li className="title">
                  <p className="m-0">
                    title <code>string</code>
                  </p>
                </li>
                <li className="content">
                  <p>The Task’s title</p>
                </li>
                <li className="title">
                  <p className="m-0">
                    done <code>bool</code>
                  </p>
                </li>
                <li className="content">
                  <p>
                    Value indicating whether the task has been completed (
                    <code>true</code>) or not (<code>false</code>)
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sidenote">
              <div className="box">
                <div className="title px-3 py-2">
                  <p className="m-0">Request</p>
                </div>
                <div className="pre-code-block p-1">
                  <pre className="chroma">
                    <span className="text-secondary mx-2">1</span>POST /users
                    {"\n"}
                    <span className="text-secondary mx-2">2</span>
                    {"\n"}
                    <span className="text-secondary mx-2">3</span>name=Fefo
                    {"\n"}
                  </pre>
                </div>
              </div>
              <div className="box">
                <div className="title px-3 py-2">
                  <p className="m-0">Response</p>
                </div>
                <div className="pre-code-block p-1">
                  <pre className="chroma ">
                    <span className="text-secondary mx-2">1</span>
                    <span className="">{"{"}</span> {"\n"}
                    <span className="text-secondary mx-2">2</span>{" "}
                    <span className="text-secondary mx-2">&quot;id&quot;</span>
                    <span>:</span>{" "}
                    <span className="">
                      &quot;FA3901CC-F667-4AA0-8CFE-B6B1C5058DFA&quot;
                    </span>
                    <span>,</span> {"\n"}
                    <span className="text-secondary mx-2">3</span>
                    {"  "}
                    <span>&quot;name&quot;</span>
                    <span>:</span> <span className="s2">&quot;Fefo&quot;</span>{" "}
                    {"\n"}
                    <span className="text-secondary mx-2">4</span>
                    <span>{"}"}</span>
                    {"\n"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row py-5 px-5 mx-5">
          <div className="col-lg-6">
            <div className="content">
              <h2 className="fs-3  my-5 text-primary" id="get-user">
                Marking as Complete
              </h2>
              <p>
                Marking a task as completed consists in issuing a
                <code>PATCH</code> request to <code>/users/:uid/tasks/:id</code>
                , which will mark a task with id <code>:id</code> belonging to
                User <code>:uid</code> as done.
              </p>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationHome;
