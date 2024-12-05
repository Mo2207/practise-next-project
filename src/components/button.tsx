

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 hover:scale-110 transition ease-in duration-300">
      {text}
    </button>
  );
};

export default Button;
