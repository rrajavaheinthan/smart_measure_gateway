Manage - view (list, detail), create, (update), logical delete
Data: 
  - metadata - expected extraction data (source of truth) for a document (has source system and id) for a number of datapoints
  - extraction - result of a DC against a particular document 
  - comparison between an extraction and corresponding annotation
  - measurement - a measurement run that has an associated collection of comparisons (for a number of documents)  
  
Metadata data entry/edit:
  - load metadata from spreadsheet
  - validate - check effectivedate is valid and core document values are not null and are unique 
      - combination of document source and source_ref is unique (for example for CLMS these will be 'CLMS', customer instance code and the record#)
      - combination of document source, customer code, document name should also be unique
  - save the annotation by calling backend save
  - Edit via ui
  
  
