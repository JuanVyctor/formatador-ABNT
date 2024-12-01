// import $ from 'jquery';

// $(document).ready(function() {
//     $('#summernote').summernote();
// });

// export default function Summernote() {
//     return(
//         <form method="post">
//             <textarea id="summernote" name="editordata"></textarea>
//         </form>
//     );
// }

// import React, { useEffect } from 'react';
// import { Summernote } from '@easylogic/react-summernote';

// const MeuComponente = () => {
//   useEffect(() => {
//     // Qualquer configuração adicional do Summernote, se necessário
//   }, []);

//   return (
//     <div>
//       <Summernote 
//         value="<p>Texto de exemplo</p>" 
//         options={{
//           height: 300,
//           toolbar: [
//             ['style', ['bold', 'italic']],
//             ['para', ['ul', 'ol', 'paragraph']]
//           ]
//         }}
//       />
//     </div>
//   );
// };

// export default MeuComponente;

import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'summernote/dist/summernote-lite.css';
import 'summernote/dist/summernote-lite.js';
import { Container, Button, Card } from 'react-bootstrap';  

const SummernoteComponent = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    $(editorRef.current).summernote({
      height: 300,
      placeholder: 'Digite seu texto aqui...',
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'italic', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ],
    });

    return () => {
      $(editorRef.current).summernote('destroy');
    };
  }, []);

  return (
    <Container className="mt-5 text-center">
      <Card className="p-4" style={{ backgroundColor: '#A583F5', color: 'white', borderRadius: '20px' }}>
        <div ref={editorRef}></div>
      </Card>
      <Button variant="light" className="mt-4" style={{ border: '2px solid black' }}>
        Formatar
      </Button>
    </Container>
  );
};

export default SummernoteComponent;
