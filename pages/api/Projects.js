import axios from "axios";
import {
  fetchProjectUrl,
  fetchSingleProjectUrl,
  fetchRelatedProjectsUrl,
  fetchProjectBycatUrl,
} from "../../essentials/utils/apiEssentials";

export const getAllProjects = async () => {
  try {
    const response = await axios.get(fetchProjectUrl);

    let filteredProjects = [];
    let undoneProjects = [];

    response.data.forEach((project, i) => {
      let categories = project._embedded["wp:term"][0];
      categories.forEach((cat, j) => {
        if (
          project.categories.includes(cat.id) &&
          ![430, 109, 1140].includes(cat.id)
        ) {
          response.data[i].category__title = cat.name;
          response.data[i].category__slug = cat.slug;
        }
      });
      if (project.acf.is_case_study_link) {
        filteredProjects.push(project);
      } else {
        undoneProjects.push(project);
      }
    });
    return { filteredProjects, undoneProjects };
  } catch (error) {
    console.log(error);
  }
};

export const getProjectByCategory = async (categoryId) => {
  try {
    const response = await axios.get(fetchProjectBycatUrl(categoryId));
    let filteredProjects = [];
    let undoneProjects = [];

    response.data.forEach((project, i) => {
      let categories = project._embedded["wp:term"][0];
      categories.forEach((cat, j) => {
        if (
          project.categories.includes(cat.id) &&
          ![430, 109, 1140].includes(cat.id)
        ) {
          response.data[i].category__title = cat.name;
          response.data[i].category__slug = cat.slug;
        }
      });
      if (project.acf.is_case_study_link) {
        filteredProjects.push(project);
      } else {
        undoneProjects.push(project);
      }
    });
    return { filteredProjects, undoneProjects };
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleProject = async (projectSlug) => {
  try {
    const response = await axios.get(fetchSingleProjectUrl(projectSlug));
    var project;
    if (response) {
      project = response.data[0];
      const res = await axios.get(fetchRelatedProjectsUrl);
      if (res) {
        let relatedProjects = res.data;
        relatedProjects = relatedProjects.filter((prejectItem, i) => {
          return prejectItem.id != project.id;
        });
        return { project, relatedProjects };
      }
    }
  } catch (error) {
    console.log(error);
  }
};
