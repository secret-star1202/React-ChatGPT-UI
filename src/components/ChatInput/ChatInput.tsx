import { Button } from '../Button/Button';
import styles from './ChatInput.module.css';
import { motion } from 'framer-motion';

export const ChatInput: React.FC<{
  input: string;
  inputChangeHandler: (input: string) => void;
  inputSubmitHandler: (prompt: string) => void;
  submitting: boolean;
}> = (props) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>, height: number) => {
    props.inputChangeHandler(event.target.value);
    const target = event.target;
    target.style.height = `${height}px`;
    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <motion.form
      className={styles['container']}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 60, opacity: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={(e) => {
        e.preventDefault();
        props.inputSubmitHandler(props.input);
      }}
    >
      <textarea
        placeholder="Enter your prompt here..."
        value={props.input}
        onChange={(event) => onChangeHandler(event, 80)}
        style={{ height: '76px' }}
        className={props.submitting ? styles['disabled-input'] : styles['input']}
        disabled={props.submitting}
      />
      <div className="mx-1"></div>
      <Button level="primary" fullWidth={false} submitting={props.submitting}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </Button>
    </motion.form>
  );
};
