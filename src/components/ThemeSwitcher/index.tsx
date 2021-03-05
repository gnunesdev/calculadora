import React, { useContext } from "react";

import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  className: string;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme, className }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <div className={className}>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.primary}
      />
    </div>
  );
};

export default ThemeSwitcher;
