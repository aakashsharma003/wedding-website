import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
export function Footer() {
  return (
    <div className="w-full h-[10dvh]">
      <div className="bg-[#13362d] flex justify-between items-center p-5">
        <div>
          <h1>LOGO</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, fuga.
          </p>
          <div>
            <span>
              <FacebookIcon />
            </span>
            <span>
              <TwitterIcon />
            </span>
            <span>
              <LinkedInIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
          </div>
        </div>
        <div className="p-5">
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
        </div>
        <div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
        </div>
        <div>
          <div>Lorem ipsum</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>Site Map</div>
          <div>Copyright Statement</div>
        </div>
        <div>
          <div>Contact</div>
          <div>info@form.com</div>
          <div>882-587-3025</div>
          <div>6115 Willa River Suite 610</div>
        </div>
      </div>
      <div className="bg-[#1a3f35] flex justify-between items-center p-5">
        <div>Terms and conditions</div>
        <div>2023-Mangal Baazar | All right reserved</div>
      </div>
    </div>
  );
}
