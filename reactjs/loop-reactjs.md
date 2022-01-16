# loop jsx
{ arr.map((item, key) =>
	<li key={key}>{item}</li>
)}

# for reactjs
{ [...Array(10)].map((item, key) =>
	<li key={key}>{item}</li>
)}

# object
Object.entries(tifs).map(([key, item], i) => <option key={i} value={key}>{item}</option>)  
