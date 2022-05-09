import React from "react";
import "./guestHomepage.scss";
import userActiveIcon from "../../assets/svgs/user-active.svg";
import gear from "../../assets/svgs/gear.svg";
import logoutIcon from "../../assets/svgs/power.svg";
import userProfile from "../../assets/svgs/user-profile.svg";
const GuestHomepage = () => {
  // const [search, setSearch] = useState('')

  // function handleInput(evt) {
  //     const { value } = evt;
  //     setSearch(value)

  // }
  // async function callApi(value) {
  //     const result = await  axios.get(`http://localhost:5000/api/shirts?vin=${value}`)
  // // } {/* <input type="search" name="" id="" />
  //   <button type="button" onSubmit={() => callApi(search)}>search</button> */}

  return (
    <div className="guest-homepage">
      <div className="guest-homepage__container">
        <header className="guest-homepage__header">
          <div className="guest-homepage__header__user">
            <span className="guest-homepage__icon-block">
              <img src={userActiveIcon} alt="an svg indicating user active" />
            </span>
            <span>Welcome,</span>
            <span>@username</span>
          </div>

          <nav className="guest-homepage__nav">
            <ul className="guest-homepage__navLinks">
              <li className="guest-homepage__navLink">
                <button type="button">
                  <span className="guest-homepage__icon-block">
                    <img src={gear} alt="gear representing a settings" />
                  </span>
                  <span>settings</span>
                </button>
              </li>
              <li className="guest-homepage__navLink">
                <button type="button">
                  <span className="guest-homepage__icon-block">
                    <img
                      src={userProfile}
                      alt="svg representing a user profile"
                    />
                  </span>
                  <span>user profile</span>
                </button>
              </li>
              <li className="guest-homepage__navLink">
                <button type="button">
                  <span className="guest-homepage__icon-block">
                    <img
                      src={logoutIcon}
                      alt="svg representing a power sign to turn off"
                    />
                  </span>
                  <span>log out account</span>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="guest-homepage-content">
          <section className="guest-homepage-content__container">
            <div className="guest-homepage-content__hero">
              <div className="guest-homepage-content__hero-block">
                <div className="mega-text">
                  <div className="mega-text__small">
                    Get to know who is driving
                  </div>
                  <div className="mega-text__large">
                    <span>Automated Identification of Official Vehicles</span>
                    <span>Powering Trusted Identities</span>
                  </div>
                </div>
                <div className="guest-homepage-content__hero-search">
                  <div className="hero-search__block">
                    <div className="search-icon__block">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 32.5C25.7843 32.5 32.5 25.7843 32.5 17.5C32.5 9.21573 25.7843 2.5 17.5 2.5C9.21573 2.5 2.5 9.21573 2.5 17.5C2.5 25.7843 9.21573 32.5 17.5 32.5Z"
                          stroke="black"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M28.75 28.75L37.5 37.5"
                          stroke="black"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="hero-search__input-block">
                      <input
                        type="text"
                        name="vin-search"
                        placeholder="Search by vehicle identification number"
                        autoFocus
                      />
                    </div>
                    <div className="hero-search__button">
                      <button type="button">Search official cars</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GuestHomepage;
