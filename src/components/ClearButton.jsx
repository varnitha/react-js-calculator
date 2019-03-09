import React from 'react';
import './ClearButton.css';

export const ClearButton=prpos=>(
<div className="clear-btn" onClick={prpos.handleClear}>{prpos.children}</div>

);