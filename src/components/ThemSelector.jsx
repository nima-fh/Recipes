import { UseTheme } from "../hooks/useTheme";

const ThemeColors = ["#0f172a", "#249c6b", "#b70233"];
function ThemeSelector() {
  const { changeColor } = UseTheme();

  return (
    <div className="flex  justify-end  max-w-6xl m-auto items-center ">
      {ThemeColors.map((color) => (
        <div key={color}>
          <button
            className="inline-block w-5 h-5 cursor-pointer rounded-2xl m-1 p-2"
            style={{ backgroundColor: color }}
            onClick={() => {
              changeColor(color);
            }}
          ></button>
        </div>
      ))}
    </div>
  );
}

export default ThemeSelector;
