var pdf = new simplePDF();
pdf.setData(
`
  <!DOCTYPE html>
  <html>
  <head>
  <title>samplePDF</title>
  <style>
    .box 
    {
      display: flex;
      flex-flow: column;
      max-height: 100%;
      height: 100vh;
      align-items: stretch;
      overflow: hidden;

      font-size: 80%;
    }

    .page-header, .page-data, .page-footer 
    {
      flex-shrink: 1;
    }

    .page-header 
    {
      flex-basis: 20%;
    }

    .page-data 
    {
      flex-grow: 1;
    }

    .page-footer 
    {
      flex-basis: 10%;
    }

    .page 
    {
      break-after: page;

      page-break-inside: avoid;
      break-inside: avoid;
    }

    .page:last-child 
    {
      break-after: auto;
    }

    /**
      * Printing
      */
    @page 
    {
      margin: 0;
    }

    .table123 
    {
      width: 100%;
    }	
  </style>
  </head>

  <body>

    <div class="box page">
      <div class="page-header">
        <table border="1" width="100%">
          <tr>
            <!-- Photo from https://pixabay.com -->
            <td rowspan="2" width="50%"><img src="great-2339957_640.jpg" alt="An example" width="300px"></td>
            <td><h2>A sample</h2></td>
          </tr>
          
          <tr>
            <td>
              <table border="1" width="100%">
                <tr>
                  <td rowspan="2">
                    Sample drive<br />
                    address line 1<br />
                    Address line 2
                  </td>
                  <td>Date</td>
                  <td>Number #</td>		
                </tr>			
              
                <tr>
                  <td>Some date</td>
                  <td>12345</td>		
                </tr>						
              </table>
            </td>
          </tr>
        </table>
        
        <table border="1" width="100%">
          <tr>
            <th colspan="2">Sample</th>
            <th colspan="2">Another sample</th>
          </tr>
          
          <tr>
            <td colspan="2">
              sample 2<br />
              more sample<br />
              example
            </td>
            <td colspan="2">
              sample 2<br />
              more sample<br />
              example
            </td>		
          </tr>
          
          <tr>
            <td>Sample date</td>
            <td>some date MM//DD/YYYY</td>		
            <td>Another field</td>
            <td>Another field with something</td>		
          </tr>	
        </table>

        <br /><br />

      </div>
      
    <div class="page-data">
      <table class="table123" border="1">
        <tr>
          <th>Field 1</th>
          <th>Field 2</th>
          <th>Field 3</th>
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td style="vertical-align: top; text-align: left;">abc</td>
          <td style="vertical-align: top; text-align: left;">123</td>
          <td>abc123<br />
          this is extra data below<br />
          </td>
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>		
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>

        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>		
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>

        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>		
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>
        
        <tr>
          <td>abc</td>
          <td>123</td>
          <td>abc123</td>		
        </tr>      
            
      </table>	

      <br /><br />

    </div>
    
    <div class="page-footer">
      <table border="1">
        <tr>
          <th>Footer field 1</th>
          <th>Footer field 2</th>
        </tr>
        
        <tr>
          <td>Data for footer field 1</td>
          <td>Data for footer field 2</td>
        </tr>		
      </table>
      
      <br />
      Page 1/3
    </div>
    
    </div>

    <div class="box page">
      <div class="page-header">
        <table border="1" width="100%">
          <tr>
            <!-- Photo from https://pixabay.com -->
            <td rowspan="2" width="50%"><img src="great-2339957_640.jpg" alt="An example" width="300px"></td>
            <td><h2>A sample</h2></td>
          </tr>
          
          <tr>
            <td>
              <table border="1" width="100%">
                <tr>
                  <td rowspan="2">
                    Sample drive<br />
                    address line 1<br />
                    Address line 2
                  </td>
                  <td>Date</td>
                  <td>Number #</td>		
                </tr>			
              
                <tr>
                  <td>Some date</td>
                  <td>12345</td>		
                </tr>						
              </table>
            </td>
          </tr>
        </table>
        
        <table border="1" width="100%">
          <tr>
            <th colspan="2">Sample</th>
            <th colspan="2">Another sample</th>
          </tr>
          
          <tr>
            <td colspan="2">
              sample 2<br />
              more sample<br />
              example
            </td>
            <td colspan="2">
              sample 2<br />
              more sample<br />
              example
            </td>		
          </tr>
          
          <tr>
            <td>Sample date</td>
            <td>some date MM//DD/YYYY</td>		
            <td>Another field</td>
            <td>Another field with something</td>		
          </tr>	
        </table>

        <br /><br />

      </div>
    <div class="page-data">
      <table class="table123" border="1">
        <tr>
        <th>Field 1</th>
        <th>Field 2</th>
        <th>Field 3</th>
        </tr>
          <tr>
            <td>abc</td>
            <td>123</td>
            <td>abc123</td>		
          </tr>
          
          <tr>
            <td>abc</td>
            <td>123</td>
            <td>abc123</td>		
          </tr>
          
          <tr>
            <td>abc</td>
            <td>123</td>
            <td>abc123</td>		
          </tr>
          
          <tr>
            <td>abc</td>
            <td>123</td>
            <td>abc123</td>		
          </tr>		
      </tr>	
      </table>

      <br /><br />

    </div>
     <div class="page-footer">
        <table border="1">
          <tr>
            <th>Footer field 1</th>
            <th>Footer field 2</th>
          </tr>
          
          <tr>
            <td>Data for footer field 1</td>
            <td>Data for footer field 2</td>
          </tr>		
        </table>
        
        <br />
        Page 1/3
      </div>
    </div>

    <div class="box page">
      <div class="page-header">
        <table border="1" width="100%">
          <tr>
            <!-- Photo from https://pixabay.com -->
            <td rowspan="2" width="50%"><img src="great-2339957_640.jpg" alt="An example" width="300px"></td>
            <td><h2>A sample</h2></td>
          </tr>
          
          <tr>
            <td>
              <table border="1" width="100%">
                <tr>
                  <td rowspan="2">
                    Sample drive<br />
                    address line 1<br />
                    Address line 2
                  </td>
                  <td>Date</td>
                  <td>Number #</td>		
                </tr>			
              
                <tr>
                  <td>Some date</td>
                  <td>12345</td>		
                </tr>						
              </table>
            </td>
          </tr>
        </table>
        
        <table border="1" width="100%">
          <tr>
            <th colspan="2">Sample</th>
            <th colspan="2">Another sample</th>
          </tr>
          
          <tr>
            <td colspan="2">
              sample 2<br />
              more sample<br />
              example
            </td>
            <td colspan="2">
              sample 2<br />
              more sample<br />
              example
            </td>		
          </tr>
          
          <tr>
            <td>Sample date</td>
            <td>some date MM//DD/YYYY</td>		
            <td>Another field</td>
            <td>Another field with something</td>		
          </tr>	
        </table>

        <br /><br />

      </div>
     <div class="page-data">
      <table class="table123" border="1">
        <tr>
        <th>Field 1</th>
        <th>Field 2</th>
        <th>Field 3</th>
        </tr>
          <tr>
            <td>abc</td>
            <td>123</td>
            <td>abc123</td>		
          </tr>
          
          <tr>
            <td>abc</td>
            <td>123</td>
            <td>abc123</td>		
          </tr>
          
          <tr>
            <td>abc</td>
            <td>123</td>
            <td>abc123</td>		
          </tr>
          
          <tr>
            <td>abc</td>
            <td>123</td>
            <td>abc123</td>		
          </tr>		
      </tr>	
      </table>

      <br /><br />

    </div>
     <div class="page-footer">
        <table border="1">
          <tr>
            <th>Footer field 1</th>
            <th>Footer field 2</th>
          </tr>
          
          <tr>
            <td>Data for footer field 1</td>
            <td>Data for footer field 2</td>
          </tr>		
        </table>
        
        <br />
        Page 3/3
      </div>
    </div>

  </body>
  </html>
`
);

pdf.print(); // now actually print