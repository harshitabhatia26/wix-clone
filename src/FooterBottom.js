import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faYoutube, faPinterest, faInstagram, faLinkedin, faTiktok} from '@fortawesome/free-brands-svg-icons';

const FooterBottom = () => {
    return (
        <div className="py-16 flex flex-row justify-around space-between items-start">
            <div className="flex flex-col">
                <div className="text-md pb-4">PRODUCT</div>
                <div className="text-sm pb-3">Templates</div>
                <div className="text-sm pb-3">Explore</div>
                <div className="text-sm pb-3">Features</div>
                <div className="text-sm pb-3">Website Builder</div>
                <div className="text-sm pb-3">Web Accessibility</div>
                <div className="text-sm pb-3">Velo</div>
                <div className="text-sm pb-3">Wix Playground</div>
                <div className="text-sm pb-3">My Sites</div>
                <div className="text-sm pb-3">Premium Plans</div>
                <div className="text-sm pb-3">Wix CEO</div>
                <div className="text-sm pb-3">Logo Maker</div>
                <div className="text-sm pb-3">Create a Blog</div>
                <div className="text-sm pb-3">Online Store</div>
                <div className="text-sm pb-3">Wix Bookings</div>
                <div className="text-sm pb-3">Restaurants</div>
                <div className="text-sm pb-3">App Market</div>
                <div className="text-sm pb-3">Domains</div>
                <div className="text-sm pb-3">Business Email</div>
                <div className="text-sm pb-3">Web Hosting</div>
                <div className="text-sm pb-3">Developers</div>
                <div className="text-sm pb-3">Enterprise</div>
                <div className="text-sm pb-3">Email Marketing</div>
                <div className="text-sm pb-3">Website Design</div>
                <div className="text-sm pb-3">Professional Tools</div>
            </div>
            <div className="flex flex-col">
            <div className="text-md pb-4">COMPANY</div>
                <div className="text-sm pb-3">About Wix</div>
                <div className="text-sm pb-3">Press Room</div>
                <div className="text-sm pb-3">Investor Relations</div>
                <div className="text-sm pb-3">Wix Jobs</div>
                <div className="text-sm pb-3">Design Assets</div>
                <div className="text-sm pb-3">Terms of Use</div>
                <div className="text-sm pb-3">App Market Terms</div>
                <div className="text-sm pb-3">Privacy Policy</div>
                <div className="text-sm pb-3">Privacy and Security Hub</div>
                <div className="text-sm pb-3">Accessibility Statement</div>
                <div className="text-sm pb-3">Abuse</div>
                <div className="text-sm pb-3">Affiliates</div>
                <div className="text-sm pb-3">Wix Capital</div>
                <div className="text-sm pb-3">Updates & Releases</div>
                <div className="text-sm pb-3">Contact Us</div>
                <div className="text-sm pb-3">Patent Notice</div>
                <div className="text-sm pb-3">Sitemap</div>
            </div>
            <div className="flex flex-col hidden sm:block">
            <div className="text-md pb-4">COMMUNITY</div>
                <div className="text-sm pb-3">Wix Blog</div>
                <div className="text-sm pb-3">Wix Marketplace</div>
                <div className="text-sm pb-3">Student Website</div>
                <div className="text-sm pb-3">Wix Encyclopedia</div>
                <div className="text-sm pb-3">Partner Community</div>
            </div>
            <div className="flex flex-col hidden sm:block">
            <div className="text-md pb-4">SUPPORT</div>
                <div className="text-sm pb-3">Support Center</div>
                <div className="text-sm pb-3">Getting Started Guide</div>
                <div className="text-sm pb-3">Wix Learn</div>
                <div className="text-sm pb-3">Status Page</div>
            </div>
            <div className="flex flex-col hidden lg:block">
                <div><img src='https://th.bing.com/th/id/OIP.Q42NGjaBYlQ87rsPCLfn-AHaEK?rs=1&pid=ImgDetMain' class="w-16 h-auto"></img></div>
                <div className="w-72 text-sm pt-4 leading-loose">
                    <p>The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</p>
                </div>
                <div className="text-sm py-6">2006-2022 Wix.com, Inc. </div>
                <div className="text-sm">
                    <FontAwesomeIcon icon={faFacebook} size="xl px-1" />
                    <FontAwesomeIcon icon={faTwitter}  size="xl px-1"/>
                    <FontAwesomeIcon icon={faYoutube}  size="xl px-1"/>
                    <FontAwesomeIcon icon={faInstagram}  size="xl px-1"/>
                    <FontAwesomeIcon icon={faLinkedin}  size="xl px-1"/>
                    <FontAwesomeIcon icon={faPinterest}  size="xl px-1"/>
                    <FontAwesomeIcon icon={faTiktok}  size="xl px-1"/>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;