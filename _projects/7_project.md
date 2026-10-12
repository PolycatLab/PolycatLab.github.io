---
layout: page
title: CHAMP
description: A platform for using HPC
img: assets/img/4.jpg
importance: 7
category: FAIR data
---

Computational chemistry relies on high-performance computing (HPC), but HPC systems can be difficult to use for beginners and occasional users. Managing the resulting data, and then publishing it so that it follows the FAIR principles, adds further work.

To tackle both problems, we developed CHAMP (HPC Access and Metadata Portal), together with Imperial's Research Computing Service and colleagues in the Department of Chemistry. CHAMP is a web portal that provides a simple interface for running packaged software on an HPC batch system. Users create a job by selecting from lists of configured resources and software, upload the files needed for the calculation, and submit it. Information about the software, the resources and the submission is recorded for every job, which makes it easy to search for and filter past calculations. In this way, CHAMP also works as an electronic laboratory notebook for computational chemistry.

CHAMP is also connected to data repositories. This allows the data from a calculation to be published with its metadata, following the FAIR principles, and a DOI to be attached to the corresponding entry in the portal.

CHAMP is open source and can be adapted to other HPC facilities. The code is available on [GitHub](https://github.com/ImperialCollegeLondon/champ).

For more details, check out our publication.

## Publications

1. Cave-Ayland, C.; Bearpark, M.; Romain, C.; Rzepa, H. S. CHAMP is a HPC Access and Metadata Portal. *J. Open Source Softw.* **2022**, *7* (70), 3824. [10.21105/joss.03824](https://doi.org/10.21105/joss.03824)
