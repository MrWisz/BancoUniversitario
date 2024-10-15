import TextStrong from "./TextStrong";
import TextLinkList from "./TextLinkList";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({
  className = "",
  text,
  propFlex,
  propAlignSelf,
  hasTitle,
}) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.figma}>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
        <div className={styles.buttonList}>
          <img
            className={styles.xLogoIcon}
            loading="lazy"
            alt=""
            src="/x-logo.svg"
          />
          <img
            className={styles.logoInstagramIcon}
            loading="lazy"
            alt=""
            src="/logo-instagram.svg"
          />
          <img
            className={styles.logoInstagramIcon}
            loading="lazy"
            alt=""
            src="/logo-youtube.svg"
          />
          <img
            className={styles.logoInstagramIcon}
            loading="lazy"
            alt=""
            src="/linkedin.svg"
          />
        </div>
      </div>
      <div className={styles.textLinkList}>
        <div className={styles.title1}>
          <TextStrong
            text={text}
            propFlex={propFlex}
            propAlignSelf={propAlignSelf}
          />
        </div>
        <div className={styles.textLinkListItem}>
          <div className={styles.listItem}>UI design</div>
        </div>
        <div className={styles.textLinkListItem}>
          <div className={styles.listItem}>UX design</div>
        </div>
        <div className={styles.textLinkListItem}>
          <div className={styles.listItem}>Wireframing</div>
        </div>
        <div className={styles.textLinkListItem}>
          <div className={styles.listItem}>Diagramming</div>
        </div>
        <div className={styles.textLinkListItem}>
          <div className={styles.listItem}>Brainstorming</div>
        </div>
        <div className={styles.textLinkListItem}>
          <div className={styles.listItem}>Online whiteboard</div>
        </div>
        <div className={styles.textLinkListItem}>
          <div className={styles.listItem}>Team collaboration</div>
        </div>
      </div>
      <TextLinkList hasTitle={hasTitle} text="Contacto" />
      <div className={styles.textLinkList1}>
        <div className={styles.title2}>
          <div className={styles.textStrong}>
            <div className={styles.textStrong1}>Resources</div>
          </div>
        </div>
        <div className={styles.textLinkListItem7}>
          <div className={styles.listItem}>Blog</div>
        </div>
        <div className={styles.textLinkListItem7}>
          <div className={styles.listItem}>Best practices</div>
        </div>
        <div className={styles.textLinkListItem7}>
          <div className={styles.listItem}>Colors</div>
        </div>
        <div className={styles.textLinkListItem7}>
          <div className={styles.listItem10}>Color wheel</div>
        </div>
        <div className={styles.textLinkListItem7}>
          <div className={styles.listItem}>Support</div>
        </div>
        <div className={styles.textLinkListItem7}>
          <div className={styles.listItem10}>Developers</div>
        </div>
        <div className={styles.textLinkListItem7}>
          <div className={styles.listItem}>Resource library</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf: PropTypes.string,
  hasTitle: PropTypes.bool,
};

export default Footer;
