.. |separator| raw:: html

	<div style="padding-top: 25px; border-bottom: 1px solid #d4d7d9;"></div>

.. _get_started:

===========
Get Started
===========

Take a look at `Installation`_ or `Build NetworKit from Source`_ in order to install NetworKit as a Python3 package or directly build it from source.

With NetworKit as a Python extension module, you get access to native high-performance code and can at the same time work interactively in the Python ecosystem.
Although the standard Python interpreter works fine, we recommend `IPython <http://ipython.readthedocs.org/en/stable/>`_ as a great environment for scientific
workflows. View the `IPython Quickstart Guide`_ for installation instructions and how to use NetworKit with IPython.

Once you have installed NetworKit, please make sure to check out our
`NetworKit UserGuide <https://github.com/networkit/networkit/blob/Dev/notebooks/User-Guide.ipynb>`_ for an overview of the features provided
in NetworKit.

|separator|

.. _Installation:

Installation
============

.. _Installation Requirements:

Requirements
------------

You will need the following software to install NetworKit as a python package:

- A modern C++ compiler, e.g.: `g++ <https://gcc.gnu.org>`_ (>= 4.8) or `clang++ <http://clang.llvm.org>`_ (>= 3.7)
- OpenMP for parallelism (usually ships with the compiler)
- Python3 (3.5 or higher is supported)
- `Pip <https://pypi.python.org/pypi/pip>`_
- `CMake <https://cmake.org/>`_ version 3.5 or higher (e.g., pip3 install cmake)
- Build System: `Make <https://www.gnu.org/software/make/>`_ or `Ninja <https://ninja-build.org/>`_
- Cython version 0.29 or higher (e.g., pip3 install cython)
- `tkinter <https://docs.python.org/3/library/tkinter.html>`_ (e.g. sudo apt-get install python3-tk on Ubuntu)

.. _Linux:

Linux
-----

Make sure Python3 and pip3, the python package manager, are installed on your system. You'll need the tkinter dependency for python3. Afterwards, pip3 can be used to install networkit.

.. code-block:: bash

  # On Ubuntu or equivalent, python3 is pre-installed.

  # Install pip3 (if needed) and tkinter dependency
  sudo apt-get install python3-pip python3-tk

  # Install networkit
  pip3 install networkit

.. _macOS:

macOS
-----

Use Homebrew to install Python3 if you haven't done so before. Afterwards, pip3 can be used to install networkit.

.. code-block:: bash

  # Install Homebrew (if needed)
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  # Install python3 and pip3 with Homebrew (if needed)
  brew install python3

  # Install networkit
  pip3 install networkit

.. _Windows:

Windows
-------

.. _Windows 10:

Windows 10
^^^^^^^^^^

With the introduction of Windows 10, Microsoft offers native support for Linux binaries through a compatibility layer called `Linux Subsystem for Windows <https://docs.microsoft.com/en-us/windows/wsl/about>`_. Please see the `installation instructions <https://docs.microsoft.com/en-us/windows/wsl/install-win10>`_ on how to install the Linux Subsystem on your machine.

The Linux Subsystem is fully compatible with NetworKit. After a successful installation, simply **open a new command line** and start a new bash shell.

.. code-block:: bash

  bash

The remainder of the installation is similar to the installation process on Linux except for the addition of the `python3-dev` package.

.. code-block:: bash

  # Install pip3, tkinter & dev dependencies
  sudo apt-get install python3-pip python3-tk python3-dev

  # Install networkit
  pip3 install networkit


.. _Windows 8 and below:

Windows 8 and below
^^^^^^^^^^^^^^^^^^^

There is currently no official support for Windows 8 and below.

|separator|

.. _Build NetworKit from Source:

Build NetworKit from Source
===========================

You can clone NetworKit from `GitHub <https://github.com/networkit/networkit>`_ with git or download the source code as a `zip file <https://github.com/networkit/networkit/archive/master.zip>`_.

For further information, we refer to the `README file <https://github.com/networkit/networkit#installation-instructions>`_ of our GitHub repository, which contains instructions for building NetworKit from source.

|separator|

.. _IPython Quickstart Guide:

Use NetworKit with IPython
==========================

First make sure you have installed IPython, e.g. via pip: :code:`pip3 install ipython`.

IPython Terminal
----------------

If you want to use NetworKit in the IPython terminal, type the following commands in your OS terminal:

.. code-block:: bash

	ipython3

.. code-block:: python

	from networkit import *

The first line opens the IPython terminal. The second line imports the *networkit* Python module. After that, you should be able to use NetworKit interactively.
For usage examples, refer to the `NetworKit UserGuide <https://github.com/networkit/networkit/blob/Dev/notebooks/User-Guide.ipynb>`_.

IPython Notebook/Jupyter
------------------------

Additionally, we recommend that you familiarize yourself with NetworKit through experimenting with the interactive IPython Notebook `NetworKit_UserGuide.ipynb` located
in the folder `Doc/Notebooks`. The user guide also introduces a large portion of NetworKits functionality with usage examples. To display and work with these notebooks,
you have to install jupyter and start a local notebook server from the terminal with:

.. code-block:: bash

	jupyter/ipython3 notebook

If you run into any problems with jupyter, head over to the `jupyter documentation <http://jupyter.readthedocs.io/en/latest/install.html>`_. If the notebook server starts as it is supposed to, your default browser should open a web interface or you have to open it manually. Then you can add `NetworKit_UserGuide.ipynb` from the above mentioned location or browse to the location through the web interface.

To show plots within the notebooks, place the following two lines at the beginning of your notebook:

.. code-block:: python

	%matplotlib inline
	matplotlib.pyplot as plt

**Note:** Instead of running jupyter, it may still be possible to run :code:`ipython3 notebook`. However, the notebook functionality of the ipython package is deprecated and has been moved to jupyter, which we strongly recommend.

NetworKit Usage Example
=======================

Now that you are done installing NetworKit, you might want to try the following example:

.. code-block:: python

	>>> from networkit import *
	>>> g = generators.HyperbolicGenerator(1e5).generate()
	>>> overview(g)
	Network Properties for:		G#5
	nodes, edges			100000, 300036
	directed?			False
	weighted?			False
	isolated nodes			1815
	self-loops			0
	density				0.000060
	clustering coefficient		0.720003
	min/max/avg degree		0, 1174, 6.000720
	degree assortativity		0.001383
	number of connected components	4026
	size of largest component	78387 (78.39 %)

	>>> communities = community.detectCommunities(g, inspect=True)
	PLM(balanced,pc,turbo) detected communities in 0.14902853965759277 [s]
	solution properties:
	-------------------  -----------
	# communities        4253
	min community size      1
	max community size   1821
	avg. community size    23.5128
	modularity              0.987991
	-------------------  -----------

	>>>

|separator|

Known Issues
============

- Mac OS X 10.10 "Yosemite": Some users have reported compilation problems on Yosemite with g++ 4.9. The compiler errors mention register problems.
  While the exact reason remains unclear, the actual issue seems to be that the compiler tries to perform a dual architecture build.
  Fix: Enforce a 64-bit build by prepending :code:`ARCHFLAGS="-arch x86_64"` to your setup/pip command, e.g. as in
  :code:`sudo ARCHFLAGS="-arch x86_64" python3 setup.py build_ext --inplace -j4` or :code:`sudo ARCHFLAGS="-arch x86_64" pip3 install networkit`.

-	NetworKit has not yet been successfully built on **Windows 8 and below** in a reproducible way. This is partially due to the fact that Windows ships without a C++ compiler which is
	necessary to build	the Python extensions. Even with the Visual C++ Redistributable our attempts were not successful. Any help is appreciated. It may
	be possible to build NetworKit as a library on Windows in environments like MinGW or Cygwin.

-	Some algorithms (e.g. StronglyConnectedComponents) are implemented in a recursive manner and for large input may exceed the default stack size on your platform.
	To work around this issue, you can lift the stack size limit for your terminal process and subsequent child processes with :code:`ulimit -s unlimited` or :code:`ulimit -Hs` (to the hard limit if there is one). It is also possible to change resource limits from Python directly with :code:`import resource; resource.setrlimit(resource.RLIMIT_STACK, (-1, -1))`.
-	On macOS, it can happen that the g++ compiler is unable to locate specific Linux-based header files. An example would be an error during the compilation of a C++ header which includes :code:`stdint`. This can generate the following error message: :code:`fatal error: sys/_types/_int8_t.h: No such file or directory`. This error will most likely happen on new systems or after a major system upgrade. In this case you need to (again) install the Xcode command line tools: :code:`xcode-select --install`. Afterwards the code should compile completely.


|separator|

Contributions
=============

We would like to encourage contributions to the NetworKit source code. See the `NetworKit Development Guide <https://networkit.github.io/dev-docs/DevGuide.html#devGuide>`_ for instructions. For support
please contact the `mailing list <https://sympa.cms.hu-berlin.de/sympa/subscribe/networkit>`_.
