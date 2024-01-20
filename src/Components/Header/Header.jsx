import "./header.css";
import IosShareIcon from "@mui/icons-material/IosShare";

export default function Header() {
  return (
    <header>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/0005/a82a/0025f492d3cfc64e1b15ef9fa269e10b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXU8~g1K386yosOm47Uw8jOTJiOopn6koShbfei8O39DXBM1Y0HvVCWXpn4YaUKCA44krI6mZRGTxkTPYWw6BKziWAxExgX9m63qCKLmDo2VxcEEiokbczTwzbdoFaysWY7dxbbddCUN5bM~VHubLjmDUEifyWcnCXFFJfYl7CGmE3YQoX3H4Cl4xWOtlmm6ouik20POjUJje7QLCk0ICKw2Y7qKIAG8GOVMcYCxPNXGUUDVW-z~9nG9R1T-leqiXkSfpQ3MKMEcucQpKpSMwAEkcbo46aSl9n7PGpyL3s9TGALUcGFTEfF8AnoHW7CX3eqd2XEf5SfSLFof3CVoOQ__"
          alt="Vite Logo"
        />
      </div>
      <div className="menu-items">
        <p>Menu</p>
        <p>Contact us</p>
        <p className="share-btn">
          <IosShareIcon sx={{ fontSize: "15px" }} />
          Share Link
        </p>
      </div>
    </header>
  );
}
