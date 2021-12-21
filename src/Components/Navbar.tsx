import Cart from "../Images/icon-cart.svg";
import Avatar from "../Images/image-avatar.png";
import Burger from "../Images/icon-menu.svg";
import Close from "../Images/icon-close.svg";
import styled from "styled-components";
import {useEffect, useState} from "react";
import CartComp from "./Cart";
import {useRecoilValue} from "recoil";
import {productCategoryAtom} from "../recoil/state/products";
import {useCategoryActions} from "../recoil/actions/categories.actions";
import {categoriesAtom} from "../recoil/state/category";
import {useProductActions} from "../recoil/actions/product.actions";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showCart, setshowCart] = useState(false);


  const categories = useRecoilValue(categoriesAtom);
  const productCategory = useRecoilValue(productCategoryAtom);
  const categoryActions = useCategoryActions();
  const productActions = useProductActions();

  console.log(productCategory);
  useEffect(() => {
    categoryActions.getAll('1');
  }, []);

  const getProductsByCategory  = (id : string) => {
    productActions.getAll(id);
  }
  return (
    <Nav>
      <Links>
        <img
          src={Burger}
          alt={Burger}
          className="burger"
          onClick={() => setShow((prev) => !prev)}
        />
        <img src={'https://www.muncher.com.co/wp-content/uploads/2021/04/Muncher-Cocinas-Ocultas-header.svg'} alt="logo" className="logo" />
        <ul className={show ? "show" : ""}>
          <li>
            <img
              src={Close}
              alt={Close}
              className="close"
              onClick={() => setShow((prev) => !prev)}
            />
          </li>
          {categories?.map((category : any,index) => <li
              style={productCategory == category.id ? {color : 'hsl(26,100%,55%)'} : {}}
              onClick={() => getProductsByCategory(category?.id)}
              key={index}>{category?.category}</li>)}
        </ul>
        <div
          className={show ? "overlay showOverlay" : "overlay"}
          onClick={() => setShow((prev) => !prev)}
        />
      </Links>
      <Profile>
        <div className="cart">
          <div className="item-count">1</div>
          <img
            src={Cart}
            alt={Cart}
            onClick={() => setshowCart((prev) => !prev)}
          />
          {showCart && <CartComp />}
        </div>
        <div className="avatar">
          <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E'} alt={Avatar} />
        </div>
      </Profile>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1152px;
  height: 110px;
  margin: auto;
  border-bottom: solid 1px hsl(223, 64%, 95%);
  z-index: 1000;

  @media (max-width: 1212px) {
    margin: 0 30px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 70px;
    padding: 30px 20px;
    margin: 0;
    border-bottom: none;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  .burger {
    margin-right: 20px;

    cursor: pointer;
    display: none;
  }

  .logo {
    margin-right: 40px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;

    .close {
      display: none;
    }

    li {
      display: flex;
      align-items: center;
      margin: 0 15px;
      color: hsl(219, 9%, 45%);
      cursor: pointer;
      height: 100%;
      position: relative;

      &::after {
        content: "";
        height: 4px;
        width: 0%;
        background-color: hsl(26, 100%, 55%);

        position: absolute;
        bottom: 0;
        left: 0;
        transition: 500ms ease;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    li:nth-of-type(1) {
      &:hover {
        &::after {
          width: 0%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .burger {
      display: block;
    }
    ul {
      position: fixed;
      top: 0;
      left: -100%;
      background-color: white;
      width: 70%;
      overflow: hidden;
      flex-direction: column;
      align-items: flex-start;
      padding: 30px 20px;
      z-index: 200;
      transition: 500ms ease;

      .close {
        display: block;
        margin-bottom: 40px;
      }

      li {
        padding: 0;
        margin: 0;
        height: 50px;
        font-weight: 700;
        color: black;
      }
    }

    .show {
      left: 0;
    }

    .overlay {
      height: 100vh;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      pointer-events: none;
      opacity: 0;
      background-color: hsl(0, 0%, 0%, 75%);
      transition: 500ms ease;
    }

    .showOverlay {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  .cart {
    position: relative;
    margin-right: 50px;

    img {
      cursor: pointer;
      transition: 200ms ease;
      z-index: 1;
    }

    .item-count {
      background-color: hsl(26, 100%, 55%);
      font-size: 9px;
      width: 18px;
      font-weight: bold;
      border-radius: 9px;
      color: white;
      text-align: center;
      transform: translate(10px, 8px);
      z-index: 2;
    }
  }

  .avatar {
    img {
      width: 50px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .cart {
      margin-right: 20px;
      position: initial;
    }

    .avatar {
      img {
        width: 25px;
      }
    }
  }
`;

export default Navbar;
