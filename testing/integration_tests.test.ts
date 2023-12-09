import {createUserPasswordData, deleteUserByID, getUserProjects, getUserPassword} from "../backend/data-access/user_model"
import {createProject, getProject, updateProject, removeProject, getAllProjects, removeProjectMember, addProjectMember, getProjectMembers} from "../backend/data-access/project_model"
import {getRepo, createRepo, updateRepo} from "../backend/data-access/repo_model"

test('Create and delete user', async () => {
    let userID: number | undefined
    const data1 = await createUserPasswordData("test user 1","test1@email.com","testpass");
    userID = data1?.id
    expect(data1?.email).toBe("test1@email.com");

    let data2 = null
    if(userID !== undefined){
        data2 = await deleteUserByID(userID);
      }
      expect(data2).toBeNull();
  });

  test('Create and delete user, and get user information', async () => {
    let userID: number | undefined
    const data1 = await createUserPasswordData("test user 124","test124@email.com","testpass24");
    userID = data1?.id
    expect(data1?.email).toBe("test124@email.com");

    const data5 = await getUserPassword("test124@email.com");
    expect(data5?.userPassword?.password).toBe("testpass24");

    let data2 = null
    if(userID !== undefined){
        data2 = await deleteUserByID(userID);
      }
      expect(data2).toBeNull();
  });

  test('Make project and get users project', async () => {
    let userID: number | undefined
    let projID: string | undefined

    const data1 = await createUserPasswordData("test user 1241","test1241@email.com","testpass241");
    userID = data1?.id
    expect(data1?.email).toBe("test1241@email.com");

    const data5 = await getUserPassword("test1241@email.com");
    expect(data5?.userPassword?.password).toBe("testpass241");

    let data6 = null
        if(userID !== undefined){
            data6 = await createProject("Project tester", userID);
        }
        projID = data6?.id
        expect(data6?.name).toBe("Project tester");

    let data7 = null
    if(projID !== undefined){
        data7 = await removeProject(projID);
    }
    if(projID !== undefined){
      data7 = await getProject(projID);
  }
    expect(data7?.name).toBe(undefined);

    let data2 = null
    if(userID !== undefined){
        data2 = await deleteUserByID(userID);
      }
      expect(data2).toBeNull();
  });


  let userID1: number | undefined
  let projID1: string | undefined
  let repoID1: string | undefined

  test('Make project and add a repo', async () => {
    

    const data1 = await createUserPasswordData("test user 11241","1test1241@email.com","1testpass241");
    userID1 = data1?.id
    expect(data1?.email).toBe("1test1241@email.com");

        let data6 = null
        if(userID1 !== undefined){
            data6 = await createProject("Project tester 2", userID1);
        }
        projID1 = data6?.id
        expect(data6?.name).toBe("Project tester 2");

          let data51 = null
          if(projID1 !== undefined){
              data51 = await createRepo(projID1, "JakobMcKenna","webScapingTutorial");
          }
          expect(data51).toBeTruthy();
      

          let data61 = null
          if(projID1 !== undefined){
              data61 = await getRepo(projID1);
          }
          repoID1 = data61?.id
          expect(data61).toBeTruthy();
   
  

          let data71 = null
          if(projID1 !== undefined && repoID1 !== undefined){
              data71 = await updateRepo(repoID1, projID1, "JakobMcKenna", "NoNameExists");
          }
          expect(data71).toBeNull();
  });


  

  test('Delete all info', async () => {
    let data7 = null
    if(projID1 !== undefined){
        data7 = await removeProject(projID1);
    }
    if(projID1 !== undefined){
      data7 = await getProject(projID1);
  }
    expect(data7?.name).toBe(undefined);

    let data2 = null
    if(userID1 !== undefined){
        data2 = await deleteUserByID(userID1);
      }
      expect(data2).toBeNull();
  });


 