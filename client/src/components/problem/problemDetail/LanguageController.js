import React from 'react';
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useCodeContext } from '#/contexts/CodeContext';
import { JAVA, PYTHON } from '#/lib/constants';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LanguageController() {
  const classes = useStyles();
  const { language, setLanguage } = useCodeContext();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='select-label'>Language</InputLabel>
        <Select
          id='language-select'
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <MenuItem value={PYTHON}>Python</MenuItem>
          <MenuItem value={JAVA}>Java</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
