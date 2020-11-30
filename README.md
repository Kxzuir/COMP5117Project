# COMP5117Project
This is the project for COMP5117
Language is nodejs

for token used by each file, please use this webpage to generate it: https://docs.github.com/en/enterprise-server@2.20/github/authenticating-to-github/creating-a-personal-access-token


index2.js is the code to download and unzip repos. Those repos is selected based on these rules:
1. check the year of the this commit;
2. if the year of this commit is new for this project, download this whole repo of this commit;
3. all following commits of this project of this year will use this above repo for search/research
4. for example: project Activiti.Activiti has about 100 commits in the dataset. The years of commits are 2017,2016,2015,etc. Then for each year, select one of the commits and download the repo of that commit.

index3.js is the code to find the unit test function name.

I used index1.js added function name of each bug. The index3.js will find related unit test function name based on the function name of each bug.
The repos generated by index2.js is located at {dir}/{year}/{projectOwner}{ProjectName}. index3.js will do recursive file search and find the unit test function name.

To do other search/research, please modify the searchUnitTestCodeBasedOnPattern() function. This function now only search unit test function name. 

The logic of searchUnitTestCodeBasedOnPattern() function is:
1. locate the folder based on {dir}/{year}/{projectOwner}{ProjectName}.
2. use BFS like recursively open each *.java file;
3. do search/research on each open file, and generate output.

line_json_dataset_part{1|2}_with_functionname.json are files generated by index1.js and used for BigQuery.

test_zipDown.json is the file generated by BigQuery query:
`SELECT EXTRACT(YEAR FROM commitDate) AS commityear, projectName, fixCommitSHA1, projectName, functionName, bugFilePath FROM modern-photon-296421.comp5117.sstubs 

UNION ALL

SELECT EXTRACT(YEAR FROM commitDate) AS commityear, projectName, fixCommitSHA1, projectName, functionName, bugFilePath FROM modern-photon-296421.comp5117.sstubs2 
`
test_zipDown.json is the input of index2.js and index3.js.

the output of index3.js, please indicate it by yourself.