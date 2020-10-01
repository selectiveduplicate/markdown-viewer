import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DOMPurify from 'dompurify';

var markdownParser = require('marked');

const getPreviewStyle = {
  height: "auto",
  padding: "5px",
  margin: "auto"
};

const textAreaPlaceholder = `## Headers, headers everywhere

# An h1 heading

#### An h4 heading

###### This is, guess what, an h6 heading...

## Emphasis is basically an h2 heading

*Some italic text for you*  
_Also italic, but using underscores_

**And here's the brave and the bold**  
__Also bold, using two underscores__

_Both **italic and bold**_

## Lists

### Unordered

* Stephen King
* Thomas Ligotti
  * Songs of a Dead Dreamer
  * Grimscribe: His Lives and Works

### Ordered

1. Fernando Pessoa
1. Franz Kafka
1. Emil Cioran
   1. On the Heights of Despair
   1. A Short History of Decay

## Images

!["Consciousness is a disease. --- Miguel de Unamuno".](http://img.picturequotes.com/2/12/11877/consciousness-is-a-disease-quote-1.jpg "Sample image.")

## Links

[SerenityOS](https://github.com/SerenityOS/serenity) is a cool open source project. Go check it out!

## Blockquotes
> I've witnessed, incognito, the gradual collapse of my life, the slow floundering of all I wanted to be. I can say, with a truth that needs no flowers to show it's dead, that there's nothing I've wanted...
>> Fernando Pessoa, The Book of Disquiet

## Inline code
The app uses \`DOMPurify\` to sanitize the output HTML.`

const InputAndPreview = () => {
  const [ userInput, setUserInput ] = useState(textAreaPlaceholder);

  const handleChange = (event) => setUserInput(event.target.value);

  return (
    <Container>
      <Row className="mt-5">
        
        <Col md={6} className="text-center mb-sm-5">
          <label htmlFor="markdown-input">
            <h3 className="text-secondary font-weight-bold">Input</h3>
          </label>
          <textarea autoFocus 
          style={{ resize: "none"}} 
          className="form-control" 
          value={ userInput }  
          onChange={ handleChange } 
          rows="10" 
          width="400" 
          id="markdown-input">
          </textarea>
        </Col>
        
        <Col md={6} className="mb-md-4">
          <h3 className="text-secondary text-center font-weight-bold">Preview</h3>
          <div 
          id="preview" 
          style={ getPreviewStyle }
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(markdownParser(userInput))}}
          >
          </div>
        </Col>
      </Row>
    </Container>
  )
};


export default InputAndPreview;