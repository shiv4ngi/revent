import { Button } from "react-bootstrap";

function EventDetailedChat() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <h3>My Notifications</h3>
        </div>
      </div>
      <div className="">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ padding: "3%" }}>
              <ul className="list-unstyled">
                {/* <!--FIRST LIST ITEM--> */}
                <li className="media">
                  {" "}
                  <span className="round pt-2">
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/groups.png"
                      className="align-self-start mr-3"
                    />
                  </span>
                  <div className="media-body">
                    <div className="row d-flex">
                      <h6 className="user pt-2">Michael Andrews</h6>
                      <div className="ml-auto">
                        <p className="text">3m</p>
                      </div>
                    </div>
                    <p className="text">Liked four of your artworks</p>
                    <div className="images mt-2">
                      {" "}
                      <img src="https://img.icons8.com/bubbles/100/000000/couple-icloud.png" />{" "}
                      <img src="https://img.icons8.com/bubbles/100/000000/check-male.png" />{" "}
                      <img src="https://img.icons8.com/bubbles/100/000000/lock-female-user.png" />{" "}
                      <img src="https://img.icons8.com/bubbles/100/000000/lock-male-user.png" />{" "}
                    </div>
                  </div>
                </li>
                {/* <!--SECOND LIST ITEM--> */}
                <li className="media my-5">
                  {" "}
                  <span className="round">
                    {" "}
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/lock-female-user.png"
                      className="align-self-start mr-3"
                    />{" "}
                  </span>
                  <div className="media-body">
                    <div className="row d-flex">
                      <h6 className="user">Craig Carder</h6>
                      <div className="ml-auto">
                        <p className="text">9m</p>
                      </div>
                    </div>
                    <p className="text">Followed you</p>
                  </div>
                </li>
                {/* <!--THIRD LIST ITEM--> */}
                <li className="media">
                  {" "}
                  <span className="round">
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/groups.png"
                      className="align-self-start mr-3"
                    />
                  </span>
                  <div className="media-body">
                    <div className="row d-flex">
                      <h6 className="user">
                        Allison Kenter, Alhena Culhane and 57 others
                      </h6>
                      <div className="ml-auto">
                        <p className="text">1h</p>
                      </div>
                    </div>
                    <p className="text mb-2">
                      Liked your "Women in Jail" Artwork
                    </p>{" "}
                    <img src="https://img.icons8.com/bubbles/100/000000/lock-female-user.png" />
                  </div>
                </li>
                {/* <!--FOURTH LIST ITEM--> */}
                <li className="media my-5">
                  {" "}
                  <span className="round">
                    <img
                      src="https://img.icons8.com/office/100/000000/user-group-man-man--v1.png"
                      className="align-self-start mr-3"
                    />
                  </span>
                  <div className="media-body">
                    <div className="row d-flex">
                      <h6 className="user">Giana Ekstrom Bothman</h6>
                      <div className="ml-auto">
                        <p className="text">2h</p>
                      </div>
                    </div>
                    <p className="text">Commented on your"Le Doux" Artwork</p>
                    <div className="media mt-3 comment">
                      {" "}
                      <a href="#">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/lock-male-user.png"
                          className="align-self-center mr-1"
                        />
                      </a>
                      <div className="media-body">
                        <p className="reply">
                          "Love this art, what inspired you to make this
                          <br />
                          &nbsp;wonderful artwork?"
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <!--FIFTH LIST ITEM--> */}
                <li className="media">
                  {" "}
                  <span className="round">
                    <img
                      src="https://img.icons8.com/office/100/000000/user-group-woman-woman.png"
                      className="align-self-start mr-3"
                    />
                  </span>
                  <div className="media-body">
                    <div className="row d-flex">
                      <h6 className="user">Leo Aminoff</h6>
                      <div className="ml-auto">
                        <p className="text">24h</p>
                      </div>
                    </div>
                    <p className="text">Bought your "Palace of Versailles"</p>
                  </div>
                </li>
              </ul>
              <textarea name="Text1" cols="40" rows="5"></textarea>
              <div className="pt-3">
                <Button variant="info"> ✍️ Add Reply</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetailedChat;
