import { memo } from 'react';
import { Link } from 'react-router-dom';
import resets from '../_resets.module.css';
import classes from './AgriVistaFarmsLandingPage.module.css';
import { AgrivistaFarmsLandingPageIcon2} from './AgrivistaFarmsLandingPageIcon2.jsx';
import {AgrivistaFarmsLandingPageIcon} from './AgrivistaFarmsLandingPageIcon.jsx';

import {Check} from './Check/Check.jsx';
import {Ellipse1Icon} from './Ellipse1Icon.jsx';
import {Ellipse2Icon} from './Ellipse2Icon.jsx';
import {Ellipse3Icon} from './Ellipse3Icon.jsx';
import {Group143Icon} from './Group143Icon.jsx';
import {Group145Icon} from './Group145Icon.jsx';
import {GroupIcon} from './GroupIcon.jsx';
import {GroupIcon2} from './GroupIcon2.jsx';
import { Groups } from './Groups/Groups';
import { ProductIcon } from './ProductIcon.jsx';
import { Star_rate2 } from './Star_rate2/Star_rate2';
import { Star_rate } from './Star_rate/Star_rate';
import { VectorIcon } from './VectorIcon.jsx';

 const AgriVistaFarmsLandingPage = memo(function AgriVistaFarmsLandingPage(props) {
  return (
    <div>
    <div className={`${resets.storybrainResets} ${classes.root}`}  >
      {/* <div className={classes.rectangle42}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.rectangle40}></div> */}
      <div className={classes.image1} style={{backgroundImage: 'url("https://www.shutterstock.com/image-photo/farmer-using-tablet-standing-wheat-600nw-1767436760.jpg")'}}></div>
      <div className={classes.image2}></div>
      <div className={classes.helplineNo1552611124300606}>Helpline no. 155261 / 011-24300606</div>
      <div className={classes.deliveryPartner}>DeliveryPartner</div>
      <div className={classes.agroGen}>AgroGen</div>
      <div className={classes.home}>Home</div>
      <div className={classes.guidelines}>Guidelines</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle7}></div>
      <Link to="/chooser">
      <div className={classes.login}>Login</div>
      </Link>
      <Link to="/chooser">
      <div className={classes.signUp}>Sign Up</div>
      </Link>
      <div className={classes.theRevolutionaryImpactOfTechno}>
        The Revolutionary Impact of Technology on Agriculture
      </div>
      <div className={classes.rectangle9}></div>
      <Link to="/helpline">
      <div className={classes.getStarted}>Get Started</div>
      </Link>
      <div className={classes.rectangle8}></div>
      <div className={classes.learnMore}>Learn More</div>

      <div className={classes.atAgrogenWeVeCreatedASimplePla}>
        At Agrogen, we&#39;ve created a simple place that connects hardworking farmers with careful buyers and vendors.
        Our easy-to-use design ensures a straightforward and honest experience, promoting a direct and sincere
        connection in every&nbsp;transaction.
      </div>
      <div className={classes.aboutUs}>About Us  Work With Us</div>
      <div className={classes.image4}></div> 
      <div className={classes.rectangle43}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle72}></div>
      <button className={classes.learnMore2}>Learn More</button>
      <div className={classes.rectangle82}></div>
      <div className={classes.contactUs}>Contact Us</div>
      <div className={classes.cultivateSuccessMasterCropPlan}>
        Cultivate Success: Master Crop Planning for Abundant Harvests!
      </div>
      <div className={classes.ourBlog}>Our Blog</div>
      <div className={classes.weAlsoOfferInsightsThroughOurB}>
        We also offer insights through our blog, keeping you informed about the latest agricultural trends, best
        practices, and success stories. Stay connected for valuable industry knowledge.
      </div>
      <div className={classes.innovationsForAGreenerFuture}>Innovations for a Greener Future</div>
      <div className={classes.discoverTheInnovationsForAGree}>
        Discover the innovations for a greener future, transforming agriculture sustainably.
      </div>
      <div className={classes.readMore}>Read More</div>
      <div className={classes.rectangle102} style={{backgroundImage: 'url("https://img.freepik.com/free-photo/high-angle-avocados-tomatoes-peppers-tray_23-2148685402.jpg")'}}></div>
      <div className={classes.thePowerOfAgriculturalAnalytic}>
        <div className={classes.textBlock}>The Power of </div>
        <div className={classes.textBlock2}>Agricultural Analytics</div>
      </div>
      <div className={classes.precisionInsightsForAgricultur}>
        Precision insights for agriculture: Enhance productivity with data-driven analysis solutions.
      </div>
      <div className={classes.readMore2}>Read More</div>
      <div className={classes.rectangle11} style={{backgroundImage: 'url("https://www.shutterstock.com/image-photo/farmer-using-tablet-standing-wheat-600nw-1767436760.jpg")'}}></div>
      <div className={classes.rectangle12} style={{backgroundImage: 'url("https://t3.ftcdn.net/jpg/01/67/18/20/360_F_167182087_xSJL6Bb1P0GdX3MHTkCafNjbVGmHtE3h.jpg")'}}></div>
      <div className={classes.ourStoryAndJourneyTowardsYou}>Our Story and Journey towards you </div>
      <div className={classes.unveilingOurJourneyAgrogenSSto}>
        Unveiling our journey: Agrogen&#39;s story cultivating innovation for you, sustainably and Efficiently.
      </div>
      <div className={classes.readMore3}>Read More</div>
      <div className={classes.rectangle5} ></div>
      <div className={classes.theBenefitsOfChoosingUs}>The Benefits of Choosing Us</div>
      <div className={classes.whyUs}>Why Us ?</div>
      <div className={classes.optingForUsGuaranteesEasyAcces}>
        Opting for us guarantees easy access to farmers, real-time market insights, streamlined transactions, and unique
        part-time job opportunities. Without us, you risk missing simplified processes, transparency, and inclusive
        earning options.
      </div>
      <div className={classes.rectangle92}></div>
      <button className={classes.learnMore3}>Learn More</button>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.transparentAndFasterPayments}>Transparent and Faster Payments</div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon2} />
      </div>
      <Check />
      <div className={classes.saferEarningOptions}>Safer Earning Options</div>
      <div className={classes.product}>
        <ProductIcon className={classes.icon3} />
      </div>
      <div className={classes.realTimeMarketInsights}>Real time market insights</div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon4} />
      </div>
      <Star_rate />
      <div className={classes._5}>5</div>
      <div className={classes.coreTeamMembers}>Core Team Members</div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon5} />
      </div>
      <Groups />
      <div className={classes.seeAllProducts}>See all products</div>
      <div className={classes.ourFeaturedProduct}>Our Featured Product</div>
      <div className={classes.indulgeInATomatoLoverSParadise}>
        Indulge in a tomato lover&#39;s paradise with our diverse selection! Choose from a tantalizing array of tomatoes
        to elevate your culinary experience.
      </div>
      <div className={classes.rectangle103} ></div>
      <div className={classes.rectangle104} style={{backgroundImage: 'url("https://5.imimg.com/data5/QM/AG/JI/SELLER-89932137/beans-500x500.jpg")'}}></div>
      <div className={classes.beans}>Beans</div>
      <div className={classes.rate2732FromMaharashtraKarnata}>
        <div className={classes.textBlock3}>Rate : ₹273.02</div>
        <div className={classes.textBlock4}>From Maharashtra, Karnataka, and Tamil Nadu</div>
      </div>
      <div className={classes.rectangle105}></div>
      <div className={classes.rectangle122} style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Y9pqCyhsfmU7-yLImvR2ZdCVyc5LsvlkjQ&usqp=CAU")'}}></div>
      <div className={classes.grapeTomato}>Grape Tomato</div>
      <div className={classes.rate115FromMaharashtraKarnatak}>
        <div className={classes.textBlock5}>Rate : ₹115</div>
        <div className={classes.textBlock6}>From Maharashtra, Karnataka, and Tamil Nadu</div>
      </div>
      <div className={classes.rectangle106} ></div>
      <div className={classes.brinjal}>Brinjal</div>
      <div className={classes.rate47FromWestBengalUttarPrade}>
        <div className={classes.textBlock7}>Rate : ₹47</div>
        <div className={classes.textBlock8}>From West Bengal, Uttar Pradesh, and Karnataka</div>
      </div>
      <div className={classes.rectangle123} style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4m2V56j5JFwfPtgbFFSimLoHduXCRVLISQ29VIEbfnZ53q4FwNpoecuAKWJUDFDiAG4&usqp=CAU")'}}></div>
      <div className={classes.rectangle107} ></div>
      <div className={classes.okra}>Okra</div>
      <div className={classes.rate129FromChhattisgarhBiharTe}>
        <div className={classes.textBlock9}>Rate : ₹129</div>
        <div className={classes.textBlock10}>From Chhattisgarh, Bihar, Telangana, Odisha and TamilNadu</div>
      </div>
      <div className={classes.rectangle13} style={{backgroundImage: 'url("https://ronmayhewphotography.com/wp-content/uploads/2022/06/A-Bunch-of-Okra-.jpg")'}}></div>
      <div className={classes.rectangle124}></div>
      <div className={classes.pages}>Pages</div>
      <div className={classes.home2}>Home</div>
      <div className={classes.about}>About</div>
      <div className={classes.product2}>Product</div>
      <div className={classes.blog}>Blog</div>
      <div className={classes.testimonials}>Testimonials</div>
      <div className={classes.ourService}>Our Service</div>
      <div className={classes.contactUs2}>Contact Us</div>
      <div className={classes.benefit}>Benefit</div>
      <div className={classes.about2}>About</div>
      <div className={classes.agroGen2}>AgroGen</div>
      <div className={classes.harvestToHands}>Harvest to Hands</div>
      <div className={classes.icon6}>
        <AgrivistaFarmsLandingPageIcon className={classes.icon7} />
      </div>
      <div className={classes.rectangle93} ></div>
      <div className={classes.schemes}>Schemes</div>
      <div className={classes.getToKnowAboutTheLatestSchemes}>
        Get to know about the latest schemes that are released for the welfare of farmers and the advancement of
        agriculture.
      </div>
      <div className={classes.group145}>
        <Group145Icon className={classes.icon8} />
      </div>
      <div className={classes.group143}>
        <Group143Icon className={classes.icon9} />
      </div>
      <div className={classes.liEuropanLinguesEsMembresDelSa}>
        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport
        etc, litot Europa usa li sam vocabular.{' '}
      </div>
      <div className={classes.madelineWilliamson}>KISSAN welfare scheme</div>
      <div className={classes.forwardCreativeManager}>Prime Minister Narendra Modi</div>
      <Star_rate2 />
      <Star_rate2 className={classes.star_rate} />
      <Star_rate2 className={classes.star_rate2} />
      <Star_rate2 className={classes.star_rate3} />
      <Star_rate2 className={classes.star_rate4} />
      <div className={classes.rectangle31} style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqn8fFsW1g4-TeYngs4VbbiGyCQW3NGiWYg&usqp=CAU")'}}></div>
      <div className={classes.ourService2}>Our service</div>
      <div className={classes.rectangle125}></div>
      <div className={classes.harvestToHands2}>Harvest to Hands</div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon10} />
      </div>
      <div className={classes.rectangle132}></div>
      <div className={classes.establishConnections}>Establish Connections</div>
      <div className={classes.icon11}>
        <AgrivistaFarmsLandingPageIcon2 className={classes.icon12} />
      </div>
      <div className={classes.rectangle112}></div>
      <div className={classes.priceTransparency}>Price transparency</div>
      <div className={classes.group2}>
        <GroupIcon2 className={classes.icon13} />
      </div>
      <div className={classes.rectangle108}></div>
      <div className={classes.supportFarmers}>Support Farmers</div>
      <div className={classes.image10}>
        <GroupIcon className={classes.icon10} />
      </div>
      <div className={classes.image5}></div>
      {/* <div className={classes.rectangle32}></div> */}
      {/* <div className={classes.rectangle33}></div> */}
      {/* <div className={classes.rectangle34}></div> */}
      {/* <div className={classes.hiHowCanHelpYou}> Hi 👋🏽 how can help you 👀</div> */}
      <div className={classes.image6}></div> 
      <div className={classes.image7}></div>
      <div className={classes.image8}></div>
      <div className={classes.rectangle36}></div>
      <div className={classes.image9}></div>
      <div className={classes.aboutUs2}>About Us</div>
      <div className={classes.rectangle37} style={{backgroundImage: 'url("https://img.freepik.com/free-photo/high-angle-avocados-tomatoes-peppers-tray_23-2148685402.jpg")'}}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.rectangle39}></div>
      <div className={classes.ourAim}>Our Aim</div>
      <div className={classes.weAimToRevolutionizeAgricultur}>
        We aim to revolutionize agriculture, enabling farmers to swiftly sell tomatoes by registering on our platform or
        through local agents. They can fix prices, and upon delivery, our agents promptly pay from sponsor funds,
        creating a seamless process benefiting farmers, sponsors, and buyers with efficient, transparent transactions
        and improved market access.
      </div>
      <div className={classes.areYouAFarmerOrPerhapsAVendorE}>
        Are you a farmer, or perhaps a vendor? else if you are looking for a work, maybe part-time or full-time? Connect
        with us!
      </div>
      <div className={classes.whoAreYou}>Who are you?</div>
      
      <div className={classes.image21}></div>
    </div>
    </div>
  );
});

export default AgriVistaFarmsLandingPage;
