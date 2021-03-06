/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PropTypes from "prop-types"
import Image from "../components/image"
import ImageAppleStore from "../components/imageAppleStore.js"
import ImagePlayStore from "../components/imagePlayStore.js"
import ImageIcon from "../components/imageIcon"
import { d } from "../utils/svg"

import "./layout.css"

const Layout = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: `#8CC7B1`,
          height: `714px`
        }}
      >
        <div className="container">
          <div className="iphonePreview">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" style={{ position: `absolute` }}>
              <clipPath id="screenMask" clipPathUnits="objectBoundingBox" transform="scale(.00257 .00119)">
                <path d={d} transform="translate(-6159.12 -394.656)"></path>
              </clipPath>
            </svg>
            <Image />
          </div>
          <div className="appInfo">
            <div className="appIcon">
              <ImageIcon />
            </div>
            <div className="appDescription">
              <p className='appDescriptionText'>Ne perdez pu de temps à chercher votre salle !</p>
            </div>
            <div className="downloadButtons">
              <a href='#'>
                <ImageAppleStore />
              </a>
              <a href='#'>
                <ImagePlayStore />
              </a>
            </div>
          </div>
          <div class="features">
            <div class="feature">
              <div>
                <span class="fa-stack fa-1x">
                  <i class="iconBack fas fa-circle fa-stack-2x"></i>
                  <i class="iconTop fas fa-star-and-crescent fa-stack-1x"></i>
                </span></div><div class="featureText">
                <h3>Emploi du temps</h3>
                <p>L'emploi du temps de votre formation directement disponible sur l'application.</p>
              </div>
            </div>
            <div class="feature">
              <div>
                <span class="fa-stack fa-1x">
                  <i class="iconBack fas fa-circle fa-stack-2x"></i>
                  <i class="iconTop fas fa-star-and-crescent fa-stack-1x"></i>
                </span></div><div class="featureText">
                <h3>Communication</h3>
                <p>Dialoguer pour mieux acceuillir les nouveaux arrivants.</p>
              </div>
            </div>
            <div class="feature">
              <div>
                <span class="fa-stack fa-1x">
                  <i class="iconBack fas fa-circle fa-stack-2x"></i>
                  <i class="iconTop fas fa-star-and-crescent fa-stack-1x"></i>
                </span></div><div class="featureText">
                <h3>Les salles de cours</h3>
                <p>Plus besoin de perdre du temps à chercher le numéro de la salle de cours.</p>
              </div>
            </div>
            <div class="feature">
              <div>
                <span class="fa-stack fa-1x">
                  <i class="iconBack fas fa-circle fa-stack-2x"></i>
                  <i class="iconTop fas fa-star-and-crescent fa-stack-1x"></i>
                </span></div><div class="featureText">
                <h3>Fil d'actualité</h3>
                <p>Possiblité de suivre l'actualité de son école afin de louper aucun événement.</p>
              </div>
            </div>
            <div class="feature">
              <div>
                <span class="fa-stack fa-1x">
                  <i class="iconBack fas fa-circle fa-stack-2x"></i>
                  <i class="iconTop fas fa-star-and-crescent fa-stack-1x"></i>
                </span></div><div class="featureText">
                <h3>Bons plans</h3>
                <p>Partagez vos meilleurs bons plans.</p>
              </div>
            </div>
            <div class="feature">
              <div>
                <span class="fa-stack fa-1x">
                  <i class="iconBack fas fa-circle fa-stack-2x"></i>
                  <i class="iconTop fas fa-star-and-crescent fa-stack-1x"></i>
                </span></div><div class="featureText">
                <h3>Gestions</h3>
                <p>Gérer les classes et les cours en une seule fois.</p>
              </div>
            </div>
          </div>
          <footer>
            <p className="footerText">© {new Date().getFullYear()}, fais avec
            <span className="heart"> ❤ </span>
              la team</p>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
