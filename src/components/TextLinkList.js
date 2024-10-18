import TextStrong from "./TextStrong";
import TextLinkListItem from "./TextLinkListItem";
import PropTypes from "prop-types";
import styles from "./TextLinkList.module.css";

const TextLinkList = ({
  className = "",
  hasTitle = true,
  text,
  propFlex,
  propAlignSelf,
}) => {
  return (
    <div className={[styles.textLinkList, className].join(" ")}>
      {hasTitle && (
        <div className={styles.title}>
          <TextStrong
            text={text}
            propFlex={propFlex}
            propAlignSelf={propAlignSelf}
          />
        </div>
      )}
      <div className={styles.textLinkListItem}>
        <div className={styles.listItem}>Design</div>
      </div>
      <div className={styles.textLinkListItem}>
        <div className={styles.listItem1}>Prototyping</div>
      </div>
      <div className={styles.textLinkListItem}>
        <div className={styles.listItem}>Development features</div>
      </div>
      <div className={styles.textLinkListItem}>
        <div className={styles.listItem}>Design systems</div>
      </div>
      <div className={styles.textLinkListItem}>
        <div className={styles.listItem}>Collaboration features</div>
      </div>
      <div className={styles.textLinkListItem}>
        <div className={styles.listItem}>Design process</div>
      </div>
      <TextLinkListItem />
    </div>
  );
};

TextLinkList.propTypes = {
  className: PropTypes.string,
  hasTitle: PropTypes.bool,
  text: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf: PropTypes.string,
};

export default TextLinkList;
