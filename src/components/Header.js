import { useMemo } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({
  className = "",
  menu16IconAlignSelf,
  menu16IconMarginLeft,
  block,
  label,
  label1,
  hasIconStart,
  hasIconStart1,
  hasIconEnd,
  hasIconEnd1,
  showButton,
  showButton1,
  propHeight,
  propHeight1,
  propBackgroundColor,
  propBackgroundColor1,
  propBorder,
  propBorder1,
  propPadding,
  propPadding1,
  propFlex,
  propFlex1,
  propAlignSelf,
  propAlignSelf1,
  propMinHeight,
  propMinHeight1,
  propAlignSelf11,
  propAlignSelf12,
  propFontSize,
  propFontSize1,
  propColor,
  propColor1,
  propFlex11,
  propFlex12,
  propTextShadow,
  propTextShadow1,
  propFontWeight,
  propFontWeight1,
  propWidth,
  propWidth1,
  propMinHeight11,
  propMinHeight12,
  headerPadding,
}) => {
  const headerStyle = useMemo(() => {
    return {
      alignSelf: menu16IconAlignSelf,
      marginLeft: menu16IconMarginLeft,
      padding: headerPadding,
    };
  }, [menu16IconAlignSelf, menu16IconMarginLeft, headerPadding]);

  return (
    <div className={[styles.header, className].join(" ")} style={headerStyle}>
      {!block && (
        <div className={styles.block}>
          <div className={styles.iconButton}>
            <img className={styles.menu16Icon} alt="" src="/menu16.svg" />
          </div>
          <div className={styles.iconButton}>
            <img className={styles.menu16Icon} alt="" src="/x16.svg" />
          </div>
          <div className={styles.figma}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
          </div>
        </div>
      )}
      <div className={styles.navigationPillList}>
        <div className={styles.navigationPill}>
          <div className={styles.title}>Pricing</div>
        </div>
        <div className={styles.navigationPill1}>
          <div className={styles.title1}>Solutions</div>
        </div>
        <div className={styles.navigationPill2}>
          <div className={styles.title1}>Community</div>
        </div>
        <div className={styles.navigationPill2}>
          <div className={styles.title1}>Resources</div>
        </div>
        <div className={styles.navigationPill2}>
          <div className={styles.title1}>Pricing</div>
        </div>
        <div className={styles.navigationPill2}>
          <div className={styles.title1}>Contact</div>
        </div>
      </div>
      <div className={styles.headerAuth}>
        <Button
          label={label}
          hasIconStart={hasIconStart}
          hasIconEnd={hasIconEnd}
          propHeight={propHeight}
          propBackgroundColor={propBackgroundColor}
          propBorder={propBorder}
          propPadding={propPadding}
          propFlex={propFlex}
          propAlignSelf={propAlignSelf}
          star="/star.svg"
          propMinHeight={propMinHeight}
          showButton={showButton}
          propAlignSelf1={propAlignSelf11}
          propFontSize={propFontSize}
          propColor={propColor}
          propFlex1={propFlex11}
          propTextShadow={propTextShadow}
          propFontWeight={propFontWeight}
          propWidth={propWidth}
          x="/x.svg"
          propMinHeight1={propMinHeight11}
        />
        <Button
          label={label1}
          hasIconStart={hasIconStart1}
          hasIconEnd={hasIconEnd1}
          propHeight={propHeight1}
          propBackgroundColor={propBackgroundColor1}
          propBorder={propBorder1}
          propPadding={propPadding1}
          propFlex={propFlex1}
          propAlignSelf={propAlignSelf1}
          star="/star1.svg"
          propMinHeight={propMinHeight1}
          showButton={showButton1}
          propAlignSelf1={propAlignSelf12}
          propFontSize={propFontSize1}
          propColor={propColor1}
          propFlex1={propFlex12}
          propTextShadow={propTextShadow1}
          propFontWeight={propFontWeight1}
          propWidth={propWidth1}
          x="/x1.svg"
          propMinHeight1={propMinHeight12}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  block: PropTypes.bool,
  label: PropTypes.string,
  label1: PropTypes.string,
  hasIconStart: PropTypes.bool,
  hasIconStart1: PropTypes.bool,
  hasIconEnd: PropTypes.bool,
  hasIconEnd1: PropTypes.bool,
  showButton: PropTypes.bool,
  showButton1: PropTypes.bool,
  propHeight: PropTypes.string,
  propHeight1: PropTypes.string,
  propBackgroundColor: PropTypes.string,
  propBackgroundColor1: PropTypes.string,
  propBorder: PropTypes.string,
  propBorder1: PropTypes.string,
  propPadding: PropTypes.string,
  propPadding1: PropTypes.string,
  propFlex: PropTypes.string,
  propFlex1: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propMinHeight: PropTypes.string,
  propMinHeight1: PropTypes.string,
  propAlignSelf11: PropTypes.string,
  propAlignSelf12: PropTypes.string,
  propFontSize: PropTypes.string,
  propFontSize1: PropTypes.string,
  propColor: PropTypes.string,
  propColor1: PropTypes.string,
  propFlex11: PropTypes.string,
  propFlex12: PropTypes.string,
  propTextShadow: PropTypes.string,
  propTextShadow1: PropTypes.string,
  propFontWeight: PropTypes.string,
  propFontWeight1: PropTypes.string,
  propWidth: PropTypes.string,
  propWidth1: PropTypes.string,
  propMinHeight11: PropTypes.string,
  propMinHeight12: PropTypes.string,

  /** Style props */
  menu16IconAlignSelf: PropTypes.any,
  menu16IconMarginLeft: PropTypes.any,
  headerPadding: PropTypes.any,
};

export default Header;
